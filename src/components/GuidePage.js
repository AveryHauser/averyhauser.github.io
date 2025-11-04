// src/components/GuidePage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import guidesData from '../guidesData.json'; // Import the new JSON

// Helper function to find a guide by its slug in the nested tree
function findGuideBySlug(slug, nodes = guidesData) {
  for (const node of nodes) {
    if (node.type === 'file' && node.slug === slug) {
      return node;
    }
    if (node.type === 'folder' && node.children) {
      const found = findGuideBySlug(slug, node.children);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

function GuidePage() {
  const { slug } = useParams(); // Get the slug from the URL
  const guide = findGuideBySlug(slug);

  // Handle case where guide isn't found
  if (!guide) {
    return (
      <section id="guide-page" className="my-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Guide Not Found</h2>
        <p className="text-light-gray mb-6">
          Sorry, we couldn't find a guide with that ID.
        </p>
        <Link
          to="/guides"
          className="text-light-green hover:underline"
        >
          &larr; Back to all guides
        </Link>
      </section>
    );
  }

  // Guide is found, render it
  return (
    <section id="guide-page" className="my-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <div className="mb-8">
          <Link
            to="/guides"
            className="text-light-green hover:underline"
          >
            &larr; Back to all guides
          </Link>
        </div>

        {/* Article Content */}
        <article className="group p-6 md:p-8 bg-gray-900 rounded-lg shadow-xl border-2 border-gray-700 transition duration-300 ease-in-out hover:shadow-2xl hover:border-light-green">
          <h2 className="text-2xl font-bold text-medium-gray mb-2 group-hover:text-light-green transition-colors duration-300">
            {guide.title}
          </h2>
          <p className="text-sm text-medium-gray mb-4 group-hover:text-light-green transition-colors duration-300">{guide.date}</p>
          
          {/* Apply the same prose classes from your blog */}
          <div className="prose prose-invert max-w-none text-medium-gray mb-4 group-hover:text-light-gray transition-colors duration-300">
            <ReactMarkdown>{guide.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </section>
  );
}

export default GuidePage;