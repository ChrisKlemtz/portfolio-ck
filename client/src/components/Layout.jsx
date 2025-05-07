import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;