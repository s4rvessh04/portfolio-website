import React from 'react';
import * as hi from 'react-icons/hi';

function Footer() {
  return (
    <footer className="lg:h-24 h-20 text-base text-center flex justify-center flex-shrink-0 bg-indigo-50 text-indigo-500">
      <h6 className="flex justify-center my-auto">
        <span>Made with</span>
        <hi.HiHeart className="m-auto mx-1 mt-px h-5 w-5" />
        <span>in 2021</span>
      </h6>
    </footer>
  );
}

export default Footer;
