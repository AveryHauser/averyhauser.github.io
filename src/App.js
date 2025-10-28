import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Homelab from './components/Homelab';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Guides from './components/Guides';
import CursorTrail from './components/CursorTrail';

function App() {
  return (
    <div className="App">
      <CursorTrail />
      <Header />
      <main>
        <Routes> {/* Define your routes here */}
          <Route path="/" element={<About />} />
          <Route path="/homelab" element={<Homelab />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/guides" element={<Guides />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;