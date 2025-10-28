// src/components/Blog.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import postsData from '../postsData.json'; // Make sure this path is correct

function Blog() {
  const sortedPosts = postsData;

  return (
    <section id="blog" className="my-16 px-4 ">
      <h2 className="text-3xl font-bold  text-light-green mb-10 text-center underline">Blog</h2>

      {sortedPosts.length > 0 ? (
        <div className="max-w-3xl mx-auto space-y-10">
          {sortedPosts.map(post => (
            /* --- Add 'group' class here --- */
            <article
              key={post.slug}
              className="group p-6 md:p-8 bg-gray-900 rounded-lg shadow-xl border-2 border-gray-700 transition duration-300 ease-in-out hover:shadow-2xl hover:border-light-green" // Added 'group'
            >
              <h3 className="text-2xl font-bold text-medium-gray mb-2 group-hover:text-light-green transition-colors duration-300">{post.title}</h3>

              {/* --- Date Styling: Set default and add group-hover --- */}
              <p className="text-sm text-medium-gray mb-4 group-hover:text-light-green transition-colors duration-300">{post.date}</p> {/* Use medium-gray normally, light-green on group hover */}

              <div className="prose prose-invert max-w-none text-medium-gray mb-4 group-hover:text-light-gray transition-colors duration-300">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-light-gray text-center">No posts yet!</p>
      )}
    </section>
  );
}

export default Blog;