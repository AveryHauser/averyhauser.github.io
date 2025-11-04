// src/components/About.js
import React from 'react';

function About() {
  return (
    <section id="about" className="my-12 px-4"> {/* Added horizontal padding */}
      <h2 className="text-3xl font-bold underline text-light-green mb-2 text-center">About Website</h2> {/* Centered title */}
      <div className="max-w-3xl mx-auto text-center"> {/* Centered paragraph container */}
        <p className="text-light-gray mb-4 leading-relaxed">
          This site serves as my developer portfolio and documentation of my experiences. I want to share the knowledge I gain and make it freely available
          to others. My goal is to provide useful information, express my thoughts on various topics, and create organized guides to reinforce my own learning
          while helping others. If you notice any spelling mistakes on GitHub, please let me know. There will likely be a few.
        </p>
        <h2 className='text-light-green text-2xl mb-2 font-bold text-center'>Homelab</h2>
        <p className="text-light-gray mb-4 leading-relaxed">
          Everything I showcase here will not be hosted on my home network. I’ll share the types of machines and software I use, but I won’t include specific
          hardware details for security reasons. This gives me peace of mind while still allowing me to share insights from my homelab setup and other useful
          information.
        </p>
        <h2 className='text-light-green text-2xl mb-2 font-bold text-center'>Projects</h2>
        <p className="text-light-gray leading-relaxed mb-4">
          he projects featured here come from classes I’ve taken while earning my bachelor’s degree, as well as personal side projects that I find interesting
          or practical. I’ll only post projects that are complete or actively in progress, each with a README.md and a preview explaining what the project is
          about.
        </p>
        <h2 className='text-light-green text-2xl mb-2 font-bold text-center'>Resume</h2>
        <p className="text-light-gray leading-relaxed mb-4">
          My resume will be available for full viewing, along with a brief summary below. If you have any questions about my resume or certifications, feel
           free to reach out on LinkedIn.
       </p>
        <h2 className='text-light-green text-2xl mb-2 font-bold text-center'>Blog</h2>
        <p className="text-light-gray leading-relaxed mb-4">
          The blog section will contain unfiltered and incomplete thoughts on technology-related topics. These posts should not be taken as fact or used
           to support any agenda. I’ll aim to post once a week, depending on my schedule and current side projects. The blog will also include concepts 
           I find interesting or worth exploring further.
       </p>
        <h2 className='text-light-green text-2xl mb-2 font-bold text-center'>Guides</h2>
        <p className="text-light-gray leading-relaxed mb-4">
          Finally, the Guides section will include polished, completed write ups based on my blog posts, as well as key information I’ve learned 
          through work or research. It will be organized like a file system for easier navigation and to track my professional growth. I plan to add more
           research focused content in the future, once my homelab is fully set up and I’m more familiar with the software.
        </p>
        {/* Optional: Add a sentence about your goals or what you enjoy */}
      </div>
    </section>
  );
}

export default About;