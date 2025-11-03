// src/components/Guides.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import guidesData from '../guidesData.json'; // <-- 1. Import the generated JSON

// Helper to get all files for the catalog view
const allFiles = (guidesData) => {
  return guidesData.flatMap(function flatten(node) {
    if (node.type === 'file') {
      return node;
    }
    if (node.type === 'folder' && node.children) {
      return node.children.flatMap(flatten);
    }
    return [];
  });
};
const flatCatalog = allFiles(guidesData);

// Recursive component to render files/folders
function FileSystemNode({ node }) {
  const [isOpen, setIsOpen] = useState(false);

  if (node.type === 'folder') {
    return (
      <div className="ml-4 my-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-light-gray hover:text-light-green focus:outline-none"
        >
          {isOpen ? '📂' : '📁'}
          <span className="ml-2 font-semibold">{node.name}</span>
        </button>
        {isOpen && (
          <div className="ml-6 border-l border-gray-700 pl-4">
            {node.children.map((childNode) => (
              <FileSystemNode key={childNode.name} node={childNode} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // It's a file
  return (
    <div className="ml-4 my-1">
      <Link
        to={`/guides/${node.slug}`} // Use the slug for the link
        className="text-light-gray hover:text-light-green transition-colors duration-200"
      >
        📄 <span className="ml-2 underline">{node.name}</span>
      </Link>
    </div>
  );
}

// Main Guides component
function Guides() {
  return (
    <section id="guides" className="my-12 px-4">
      <h2 className="text-3xl font-bold underline text-light-green mb-6 text-center">
        Guides
      </h2>
      
      {/* File System Navigator */}
      <div className="max-w-2xl mx-auto bg-gray-900 border-2 border-gray-700 rounded-lg p-6 shadow-xl">
        <h3 className="text-xl font-bold text-light-green mb-4">/</h3>
        <div className="font-mono">
          {guidesData.map((node) => (
            <FileSystemNode key={node.name} node={node} />
          ))}
        </div>
      </div>
      
      {/* Full Catalog List */}
      <div className="max-w-2xl mx-auto mt-10">
        <h3 className="text-2xl font-bold text-light-green mb-4 text-center">
          Full Catalog
        </h3>
        <ul className="list-disc list-inside text-left">
          {flatCatalog.map(fileNode => (
            <li key={fileNode.slug} className="mb-2 ml-4">
              <Link
                to={`/guides/${fileNode.slug}`}
                className="text-light-gray hover:text-light-green underline"
              >
                {fileNode.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Guides;