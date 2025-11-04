// src/components/Guides.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import guidesData from '../guidesData.json';

// --- 1. ICON COMPONENTS ---

// A simple folder icon component
function FolderIcon({ className = '', isOpen = false }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0l-.857-6A2.25 2.25 0 013.927 1.5h5.817c.621 0 1.227.26 1.639.7l.863 1.024a.75.75 0 00.613.32h5.132a2.25 2.25 0 012.247 2.118l-.857 6z" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      )}
    </svg>
  );
}

// A simple file icon component
function FileIcon({ className = '' }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M13.5 14.25h-3v-3h3v3z" />
    </svg>
  );
}

// --- 2. HELPER FOR FULL CATALOG ---
const allFiles = (guidesData) => {
  return guidesData.flatMap(function flatten(node) {
    if (node.type === 'file') return node;
    if (node.type === 'folder' && node.children) return node.children.flatMap(flatten);
    return [];
  });
};
const flatCatalog = allFiles(guidesData);


// --- 3. THIS IS THE COMPONENT THAT WAS MISSING ---
function FileSystemNode({ node }) {
  const [isOpen, setIsOpen] = useState(false);

  // If it's a folder, render a button to open it
  if (node.type === 'folder') {
    const folderColor = isOpen ? 'text-light-green' : 'text-medium-gray';

    return (
      <div className="ml-4 my-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-light-gray hover:text-light-green focus:outline-none"
        >
          <FolderIcon 
            className={`w-5 h-5 mr-2 ${folderColor}`} 
            isOpen={isOpen} 
          />
          <span className="font-semibold">{node.name}</span>
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

  // If it's a file, render a link
  return (
    <div className="ml-4 my-1">
      <Link
        to={`/guides/${node.slug}`}
        className="flex items-center text-light-gray hover:text-light-green transition-colors duration-200"
      >
        <FileIcon className="w-5 h-5 mr-2 text-light-green" /> 
        <span>{node.name}</span>
      </Link>
    </div>
  );
}


// --- 4. THIS IS YOUR MAIN COMPONENT ---
function Guides() {
  return (
    <section id="guides" className="my-12 px-4">
      <h2 className="text-3xl font-bold underline text-light-green mb-6 text-center">
        Guides
      </h2>
      
      {/* File System Navigator */}
      <div className="max-w-2xl mx-auto bg-gray-900 border-2 border-gray-700 rounded-lg p-6 shadow-xl text-left">
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
        <ul className="list-disc list-outside text-left ml-4 pl-5 marker:text-light-green">
          {flatCatalog.map(fileNode => (
            <li key={fileNode.slug} className="mb-2 ml-4">
              <Link
                to={`/guides/${fileNode.slug}`}
                className="text-light-gray hover:text-light-green"
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