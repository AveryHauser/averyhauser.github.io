import React from 'react';

function Header() {
  return (
    // Kept border, slightly increased padding, kept sticky
    <header className="text-light-gray p-4 pr-6 md:pr-8 border-b border-gray-700 sticky top-0 z-10 bg-dark-gray"> {/* Increased right padding (pr-6 md:pr-8) */}
      <nav>
        {/* Changed justify-center to justify-end to align items to the right */}
        <ul className="flex justify-end space-x-6 md:space-x-8"> {/* Changed to justify-end */}
          {/* Added text-lg for larger font size */}
          <li><a href="about" className="text-lg hover:text-light-green transition-colors duration-200">About</a></li>
          <li><a href="homelab" className="text-lg hover:text-light-green transition-colors duration-200">Homelab</a></li>
          <li><a href="projects" className="text-lg hover:text-light-green transition-colors duration-200">Projects</a></li>
          <li><a href="resume" className="text-lg hover:text-light-green transition-colors duration-200">Resume</a></li>
          <li><a href="blog" className="text-lg hover:text-light-green transition-colors duration-200">Blog</a></li>
          <li><a href="guides" className="text-lg hover:text-light-green transition-colors duration-200">Guides</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;