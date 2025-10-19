import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
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