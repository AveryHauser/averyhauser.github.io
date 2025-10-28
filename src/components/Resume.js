// src/components/Resume.js
import React from 'react';

function Resume() {
  return (
    <section id="resume" className="my-16 px-4 text-left max-w-4xl mx-auto"> {/* Centered content */}
      <h2 className="text-3xl font-bold text-light-green mb-8 text-center">Resume</h2> {/* Centered title */}

      {/* Download Link Button */}
      <div className="text-center mb-10">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-700 hover:bg-gray-600 text-light-green font-semibold py-2 px-4 border border-dark-green hover:border-light-green rounded shadow transition-colors duration-200"
        >
          Download Full Resume (PDF)
        </a>
      </div>

      {/* --- Summary/Objective --- */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-accent-green mb-3">Summary</h3>
        <p className="text-light-gray leading-relaxed">
          Highly motivated tech enthusiast with experience in [Your Skill 1], [Your Skill 2], and managing home lab infrastructure. Seeking a challenging role in [Desired Field]...
        </p>
      </div>

      {/* --- Skills --- */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-accent-green mb-3">Key Skills</h3>
        <ul className="list-disc list-inside text-light-gray space-y-1">
          <li>Linux Administration (Ubuntu, CentOS)</li>
          <li>Networking (TCP/IP, VLANs, Firewalls)</li>
          <li>Virtualization (Proxmox, Docker)</li>
          <li>Scripting (Bash, Python)</li>
          <li>Web Technologies (React, Node.js - if applicable)</li>
          {/* Add more skills */}
        </ul>
      </div>

      {/* --- Experience (Example Entry) --- */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-accent-green mb-3">Experience</h3>
        <div className="mb-4">
          <h4 className="text-xl font-medium text-light-gray">Job Title / Role</h4>
          <p className="text-medium-gray italic">Company Name / Personal Project | Start Date – End Date</p>
          <ul className="list-disc list-inside text-light-gray mt-2 space-y-1">
            <li>Responsibility or achievement description.</li>
            <li>Another key accomplishment.</li>
          </ul>
        </div>
        {/* Add more experience entries */}
      </div>

      {/* --- Education --- */}
      <div>
        <h3 className="text-2xl font-semibold text-accent-green mb-3">Education</h3>
        <div className="mb-4">
          <h4 className="text-xl font-medium text-light-gray">Degree Name / Certification</h4>
          <p className="text-medium-gray italic">Institution Name | Graduation Date / Completion Date</p>
          {/* Optional: Add relevant coursework or honors */}
        </div>
        {/* Add more education entries */}
      </div>

    </section>
  );
}

export default Resume;