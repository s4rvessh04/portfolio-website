import React from 'react';
import * as si from 'react-icons/si';
import Layout from '../components/Layout';

function social() {
  return (
    <Layout>
      <div className="lg:flex justify-between lg:px-16 px-4">
        <div className="grid md:grid-cols-2 md:gap-8 gap-4 h-HeightHeroBox my-12 w-full">
          <div className="flex-shrink-0 z-50 overflow-hidden flex justify-between bg-pink-50 transition-all duration-150 hover-dropDown-pink">
            <si.SiInstagram className="z-0 relative -left-8 -bottom-8 h-48 w-48 flex self-end text-pink-100 dropDown-pink" />
            <h5 className="self-center flex-1 ml-14 font-semibold text-lg text-pink-300">
              Instagram
            </h5>
          </div>
          <div className="flex-shrink-0 z-50 overflow-hidden flex justify-between bg-blue-50 transition-all duration-150 hover-dropDown-blue">
            <si.SiLinkedin className="z-0 relative -left-8 -bottom-8 h-48 w-48 flex self-end text-blue-100 dropDown-blue" />
            <h5 className="self-center flex-1 ml-14 font-semibold text-lg text-blue-300">
              Linkedin
            </h5>
          </div>
          <div className="flex-shrink-0 z-50 overflow-hidden flex justify-between bg-lightBlue-50 transition-all duration-150 hover-dropDown-lightBlue">
            <si.SiTwitter className="z-0 relative -left-8 -bottom-8 h-48 w-48 flex self-end text-lightBlue-100" />
            <h5 className="self-center flex-1 ml-14 font-semibold text-lg text-lightBlue-300">
              Twitter
            </h5>
          </div>
          <div className="flex-shrink-0 z-50 overflow-hidden flex justify-between bg-red-50 transition-all duration-150 hover-dropDown-red">
            <si.SiGmail className="z-0 relative -left-8 -bottom-8 h-48 w-48 flex self-end text-red-100 dropDown-red" />
            <h5 className="self-center flex-1 ml-14 font-semibold text-lg text-red-300">Gmail</h5>
          </div>
        </div>
        <div className="flex flex-col justify-between m-auto my-12 lg:ml-16 md:p-8 px-4 py-6 h-HeightHeroBox lg:w-WidthHeroBox w-auto border border-gray-200 flex-shrink-0 shadow-soft">
          <div className="flex-1">
            <h3 className="text-2xl text-center font-extralight mb-8">Contact Form</h3>
            <input
              type="text"
              placeholder="Name"
              className="border w-full py-3 px-4 text-sm mb-8 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:shadow-inner"
            />
            <input
              type="text"
              placeholder="Email"
              className="border w-full py-3 px-4 text-sm mb-8 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:shadow-inner"
            />
            <textarea
              name="Details"
              className="border w-full h-1/3 text-sm px-4 py-3 mb-8 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:shadow-inner"
              placeholder="Content"
            ></textarea>
          </div>
          <button className="bg-indigo-500 text-white w-full p-3 font-semibold text-sm focus:ring-2 ring-offset-2 ring-indigo-400 transition-all duration-100">
            <div className="flex justify-center">Send it !</div>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default social;
