// scripts/build-guides.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const guidesDirectory = path.join(process.cwd(), 'src/guides');
const outputFilePath = path.join(process.cwd(), 'src/guidesData.json');

/**
 * Recursively scans a directory and builds a nested array of
 * files and folders, parsing frontmatter from .md files.
 */
function scanDirectory(directoryPath) {
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });

  const nodes = entries.map((entry) => {
    const fullPath = path.join(directoryPath, entry.name);
    
    if (entry.isDirectory()) {
      // It's a folder, recurse
      return {
        type: 'folder',
        name: entry.name,
        children: scanDirectory(fullPath), // Recursive call
      };
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      // It's a markdown file, read and parse it
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      
      // Ensure basic frontmatter exists
      if (!matterResult.data.slug) {
        throw new Error(`Guide "${entry.name}" is missing a 'slug' in its frontmatter!`);
      }
      if (!matterResult.data.title) {
        throw new Error(`Guide "${entry.name}" is missing a 'title' in its frontmatter!`);
      }

      return {
        type: 'file',
        name: entry.name,
        ...matterResult.data, // title, date, slug
        content: matterResult.content,
      };
    }
    return null; // Ignore other files (like .DS_Store)
  });

  // Filter out nulls and sort (folders first, then alphabetically)
  return nodes
    .filter(Boolean)
    .sort((a, b) => {
      if (a.type === 'folder' && b.type !== 'folder') return -1;
      if (a.type !== 'folder' && b.type === 'folder') return 1;
      return a.name.localeCompare(b.name);
    });
}

console.log('Building guides data...');
const guidesTree = scanDirectory(guidesDirectory);
fs.writeFileSync(outputFilePath, JSON.stringify(guidesTree, null, 2));
console.log(`Successfully generated guides tree to ${outputFilePath}`);