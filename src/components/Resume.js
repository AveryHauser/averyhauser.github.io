// src/components/Resume.js
import React from 'react';

function Resume() {
  return (
    <section id="resume" className="my-16 px-4 text-left max-w-4xl mx-auto"> {/* Centered content */}
      <h2 className="text-3xl font-bold underline text-light-green mb-8 text-center">Resume</h2> {/* Centered title */}

      {/* Download Link Button */}
      <div className="text-center mb-10">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-700 hover:bg-gray-600 text-light-green font-semibold py-2 px-4 border border-dark-green hover:border-light-green rounded shadow transition-colors duration-200"
        >
          View Full Resume (PDF)
        </a>
      </div>

      {/* --- Summary/Objective --- */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-accent-green mb-3">Summary</h3>
        <p className="text-light-gray leading-relaxed">
         Highly motivated Computer Science student with hands-on experience in IT support , system deployment , and Active Directory management. 
         Proven leadership and problem-solving skills demonstrated through supervising technical staff and achieving the rank of Eagle Scout. 
         Seeking a challenging role in [Desired Field - e.g., System Administration, IT Operations, or Software Development].
        </p>
      </div>

      {/* --- Skills --- */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-accent-green mb-3">Key Skills</h3>
        <ul className="list-disc list-inside text-light-gray space-y-1">
          <li>Programming & Databases: C++, OCaml, SQL</li>
          <li>IT Administration: Active Directory , System Imaging & Deployment , Technical Support & Troubleshooting</li>
          <li>Professional Skills: Staff Supervision & Mentoring , Technical Writing (Manuals) , Inventory Management</li>
          <li>Software & Hardware: Microsoft Office Suite , A/V Support (Livestreams)</li>
          {/* Add more skills */}
        </ul>
      </div>

      {/* --- Experience (Example Entry) --- */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-accent-green mb-3">Experience</h3>
        <div className="mb-4">
          <h4 className="text-xl font-medium text-light-gray">Lead IT Lab Technical</h4>
          <p className="text-medium-gray italic">Ohio University / Sept 2023 – Present</p>
          <ul className="list-disc list-inside text-light-gray mt-2 space-y-1">
            <li>Supervise and mentor IT lab technicians, overseeing task delegation and issue resolution.</li>
            <li>Created and deployed computer images for college-wide technology rollouts, ensuring consistent system setup.</li>
            <li>Managed user and device access in Active Directory, adding computers, faculty, and staff to appropriate domains, NAS, and printer groups.</li>
          </ul>
        </div>
        {/* Add more experience entries */}
      </div>

      {/* --- Education --- */}
      <div>
        <h3 className="text-2xl font-semibold text-accent-green mb-3">Education</h3>
        <div className="mb-4">
          <h4 className="text-xl font-medium text-light-gray">Bachelor of Science in Computer Science (in progress)</h4>
          <p className="text-medium-gray italic">Ohio University | Anticipated Graduation: May 2027</p>
          {/* Optional: Add relevant coursework or honors */}
        </div>
        {/* Add more education entries */}
      </div>

    </section>
  );
}

export default Resume;