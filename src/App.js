import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Homelab from './components/Homelab';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Guides from './components/Guides';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Homelab />
        <Projects />
        <Resume />
        <Blog />
        <Guides />
      </main>
    </div>
  );
}

export default App;