import React from 'react';

function About() {
  return (
    // Added margin for spacing between sections
    <section id="about" className="my-12">
      {/* Applied dark theme styling to heading */}
      <h2 className="text-3xl font-bold text-neon-green mb-4">About Me</h2>
      {/* Applied dark theme styling to paragraph */}
      <p className="text-light-gray leading-relaxed">
        This is where you can write a little bit about yourself.
        Talk about your passion for technology, your skills, and what you're looking for in a role.
      </p>
    </section>
  );
}

export default About;