import React from 'react';

function Homelab() {
  return (
    <section id="homelab" className="my-12 px-4"> {/* Added horizontal padding */}
      <h2 className="text-3xl font-bold underline text-light-green mb-6 text-center">Homelab</h2> {/* Centered title */}
      <p>
        Describe your homelab setup here. What hardware are you using? What software and services are you running?
        This is a great place to show off your passion for infrastructure and self-hosting.
      </p>
    </section>
  );
}

export default Homelab;