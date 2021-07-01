import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <div className="lg:h-screen flex flex-col justify-between text-gray-900">
        <Navbar />
        <div className="flex-1 flex-shrink-0">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
