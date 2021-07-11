import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/global.css';

function Layout({ children, pagename, prefix }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{prefix ? 'targusrock | Portfolio-Website' : `Portfolio-Website${pagename}`}</title>
      </Helmet>
      <div className="lg:h-screen flex flex-col justify-between text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-150">
        <Navbar />
        <div className="flex-1 flex-shrink-0" data-testid="Children">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
