// scripts/build-posts.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter'); // Import gray-matter

const postsDirectory = path.join(process.cwd(), 'src/posts'); // Path to your posts
const outputFilePath = path.join(process.cwd(), 'src/postsData.json'); // Where to save the output

function getPostsData() {
  // Get file names under /src/posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md')) // Only include .md files
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id (filename without .md) and content
      return {
        slug: fileName.replace(/\.md$/, ''), // Use filename as slug/id
        ...matterResult.data, // Spread the frontmatter data (title, date)
        content: matterResult.content, // The actual markdown content
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

const posts = getPostsData();
// Write the posts data to a JSON file in the src directory
fs.writeFileSync(outputFilePath, JSON.stringify(posts, null, 2));

console.log(`Successfully generated ${posts.length} posts to ${outputFilePath}`);