import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import * as di from 'react-icons/di';
import * as hi from 'react-icons/hi';

function Navbar() {
  const isBrowser = typeof window !== 'undefined';
  const [isOpen, setIsOpen] = useState(() => {
    if (isBrowser) {
      return window.innerWidth > 1024 ? true : false;
    }
  });
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
        <div className="flex justify-between w-full" data-testid="navbar-icons">
          <ThemeToggler role="themeToggler">
            {({ theme, toggleTheme }) =>
              theme === 'light' ? (
                <hi.HiOutlineSun
                  className="w-8 h-8 mb-1 text-current cursor-pointer"
                  onClick={() => toggleTheme('dark')}
                />
              ) : (
                <hi.HiOutlineMoon
                  className="w-8 h-8 mb-1 text-current cursor-pointer"
                  onClick={() => toggleTheme('light')}
                />
              )
            }
          </ThemeToggler>
          <button
            onClick={toggle}
            className="lg:hidden rounded-lg focus:outline-none"
            data-testid="menuButton"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6 mb-1">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
                className={isOpen ? 'hidden' : 'w-8 h-8'}
              ></path>
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
                className={isOpen ? 'w-8 h-8 mb-1' : 'hidden'}
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
          <ul
            className="flex lg:justify-center justify-evenly items-center font-light text-lg"
            data-testid="navbar-navlinks"
          >
            <li className="lg:mr-10 border-b-2 border-transparent">
              <Link to="/" activeClassName={activeItem} className="pb-1">
                Home
              </Link>
            </li>
            <li className="lg:mr-10 border-b-2 border-transparent">
              <Link to="/social" activeClassName={activeItem} className="pb-1">
                Social
              </Link>
            </li>
            <li className="lg:mr-10 border-b-2 border-transparent">
              <Link to="/projects" activeClassName={activeItem} className="pb-1">
                Projects
              </Link>
            </li>
            <li className="lg:mr-10 border-b-2 border-transparent">
              <Link to="/about" activeClassName={activeItem} className="pb-1">
                About
              </Link>
            </li>
            <li>
              <a href="https://www.github.com/targusrock" target="_blank" rel="noreferrer">
                <di.DiGithubBadge className="h-8 w-8 md:mb-1 mb-2 text-gray-400 dark:text-gray-50" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
