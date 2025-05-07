import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Mein Portfolio</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Über mich</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projekte</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">Fähigkeiten</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;