import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    // Kept border, slightly increased padding, kept sticky
    <header className="text-light-gray p-4 pr-6 md:pr-8 border-b border-gray-700 sticky top-0 z-10 bg-dark-gray"> {/* Increased right padding (pr-6 md:pr-8) */}
      <nav>
        {/* Changed justify-center to justify-end to align items to the right */}
        <ul className="flex justify-end space-x-6 md:space-x-8"> {/* Changed to justify-end */}
          {/* Added text-lg for larger font size */}
          <li><Link to="about" className="text-lg hover:text-light-green transition-colors duration-200">About</Link></li>
          <li><Link to="homelab" className="text-lg hover:text-light-green transition-colors duration-200">Homelab</Link></li>
          <li><Link to="projects" className="text-lg hover:text-light-green transition-colors duration-200">Projects</Link></li>
          <li><Link to="resume" className="text-lg hover:text-light-green transition-colors duration-200">Resume</Link></li>
          <li><Link to="blog" className="text-lg hover:text-light-green transition-colors duration-200">Blog</Link></li>
          <li><Link to="guides" className="text-lg hover:text-light-green transition-colors duration-200">Guides</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;