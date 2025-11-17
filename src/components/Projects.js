import React from 'react';

function Projects() {
  return (
    <section id="project" className="my-12 px-4"> {/* Added horizontal padding */}
      <h2 className="text-3xl font-bold underline text-light-green mb-6 text-center">Projects</h2> {/* Centered title */}
      {/* You can map over an array of your projects here */}
      <div className="project">
        <h2 className='text-light-green text-2xl mb-2 font-bold text-center'>On Going Projects</h2>

        <iframe
        src={process.env.PUBLIC_URL + '/project_road_map.html'}
        title="Project Roadmap"
        style={{
          width: '100%',
          height: '600px',
          border: 'none',
          borderRadius: '8px'
        }}
        ></iframe>

        <h2 className='text-light-green text-2xl mb-2 font-bold text-center'>Finished Projects</h2>
      </div>
    </section>
  );
}

export default Projects;
