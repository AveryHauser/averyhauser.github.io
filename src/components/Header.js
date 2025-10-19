import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#homelab" className="hover:text-gray-300">Homelab</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#resume" className="hover:text-gray-300">Resume</a></li>
          <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
          <li><a href="#guides" className="hover:text-gray-300">Guides</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;