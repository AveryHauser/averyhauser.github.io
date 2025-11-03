import React from 'react';

function Projects() {
  return (
    <section id="project" className="my-12 px-4"> {/* Added horizontal padding */}
      <h2 className="text-3xl font-bold underline text-light-green mb-6 text-center">Projects</h2> {/* Centered title */}
      {/* You can map over an array of your projects here */}
      <div className="project">
        <h3>Project Title</h3>
        <p>Project description...</p>
        <a href="https://github.com/your-username/your-repo">View on GitHub</a>
      </div>
    </section>
  );
}

export default Projects;