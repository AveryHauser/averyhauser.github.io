import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    // 1. Added "flex", "justify-between", and "items-center"
    <header className="text-light-gray p-4 pr-6 md:pr-8 border-b border-gray-700 sticky top-0 z-10 bg-dark-gray flex justify-between items-center">
      {/* 2. This is your new icon/logo on the left */}
      <div>
        {/* You can replace this text with your <img> or <svg> icon */}
        <Link to="/">
        <img src="/icon.png" alt="Logo" className="h-10 w-auto" />
        </Link>
        {/* Example if you had an image:
          <Link to="/">
            <img src="/logo.svg" alt="Logo" className="h-10" />
          </Link>
        */}
      </div>

      {/* 3. Your nav is now the second item, pushed to the right */}
      <nav>
        {/* 4. Removed "justify-end" from here, as the header now handles the spacing */}
        <ul className="flex space-x-6 md:space-x-8">
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

// Don't forget to export your component
export default Header;