import React from 'react';

function Guides() {
  return (
    <section id="guides">
      <h2>Guides</h2>
      <p>
        Here you can share helpful guides, tutorials, and snippets.
        Think about common problems you've solved or interesting things you've learned.
      </p>
      {/* Example of a guide item */}
      <div className="guide">
        <h3>How to set up a Raspberry Pi for home automation</h3>
        <p>A step-by-step guide on setting up a new Raspberry Pi from scratch...</p>
        <a href="/guides/raspberry-pi-setup">Read More</a>
      </div>
    </section>
  );
}

export default Guides;