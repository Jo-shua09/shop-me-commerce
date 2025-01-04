import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <div className="navbar-section">
        <Navbar />
      </div>

      <div className="hero-section">
        <Hero />
      </div>
    </div>
  );
}

export default App;
