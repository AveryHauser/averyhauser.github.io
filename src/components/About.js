// src/components/About.js
import React from 'react';

function About() {
  return (
    <section id="about" className="my-12 px-4"> {/* Added horizontal padding */}
      <h2 className="text-3xl font-bold text-light-green mb-6 text-center">About Me</h2> {/* Centered title */}
      <div className="max-w-3xl mx-auto text-center"> {/* Centered paragraph container */}
        <p className="text-light-gray leading-relaxed mb-4">
          Welcome! I'm a technology enthusiast passionate about exploring software, hardware, and infrastructure. This site showcases my <a href="#projects" className="text-accent-green hover:text-light-green underline">projects</a> and details my evolving <a href="#homelab" className="text-accent-green hover:text-light-green underline">homelab</a> setup, which I'll be detailing soon with diagrams covering the OS, software, and hardware involved.
        </p>
        <p className="text-light-gray leading-relaxed mb-4">
          You can find my professional qualifications on my <a href="#resume" className="text-accent-green hover:text-light-green underline">resume</a>. I also maintain a <a href="#blog" className="text-accent-green hover:text-light-green underline">blog</a> where I post weekly updates, documentation, and general information, as well as more in-depth <a href="#guides" className="text-accent-green hover:text-light-green underline">guides</a> aimed at providing helpful, professional write-ups.
        </p>
        {/* Optional: Add a sentence about your goals or what you enjoy */}
        <p className="text-light-gray leading-relaxed">
          I enjoy learning continuously and sharing what I discover along the way.
        </p>
      </div>
    </section>
  );
}

export default About;