import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import * as hi from 'react-icons/hi';
import * as di from 'react-icons/di';

function Navbar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 1024 ? true : false);
  const activeItem = 'border-b-2 border-indigo-500';

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="lg:h-24 lg:px-16 px-4 py-3 lg:flex lg:justify-between items-center flex-shrink-0">
        <div className="flex justify-between w-full">
          <hi.HiOutlineSun className="h-8 w-8 ml-0 mb-1" />
          <button onClick={toggle} className="lg:hidden rounded-lg focus:outline-none">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
                className={isOpen ? 'hidden' : 'w-6 h-6'}
              ></path>
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
                className={isOpen ? 'w-6 h-6' : 'hidden'}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={isOpen ? 'lg:mt-0 mt-5' : 'hidden'}
          onClick={!toggle}
          onKeyDown={!toggle}
          role="presentation"
        >
          <div className="flex lg:justify-center justify-evenly items-center font-light text-lg">
            <Link
              to="/"
              activeClassName={activeItem}
              className="lg:mr-10 md:mb-0 mb-2 border-b-2 border-transparent"
            >
              Home
            </Link>
            <Link
              to="/social"
              activeClassName={activeItem}
              className="lg:mr-10 md:mb-0 mb-2 border-b-2 border-transparent"
            >
              Social
            </Link>
            <Link
              to="/projects"
              activeClassName={activeItem}
              className="lg:mr-10 md:mb-0 mb-2 border-b-2 border-transparent"
            >
              Projects
            </Link>
            <Link
              to="/about"
              activeClassName={activeItem}
              className="lg:mr-10 md:mb-0 mb-2 border-b-2 border-transparent"
            >
              About
            </Link>
            <Link to="https://www.github.com/targusrock" target="_blank">
              <di.DiGithubBadge className="h-8 w-8 md:mb-0.5 mb-2 text-gray-400" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
