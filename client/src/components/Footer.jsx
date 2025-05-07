import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Mein Portfolio. Alle Rechte vorbehalten.</p>
        <div className="social-links">
          {/* Hier können Social Media Links hinzugefügt werden */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;