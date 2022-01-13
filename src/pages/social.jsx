import React from 'react';
import * as si from 'react-icons/si';
import Layout from '../components/Layout';

function Social() {
  const socialHandles = {
    Instagram: {
      url: 'https://www.instagram.com/sarveshrane2000/',
      color: 'pink',
      theme: {
        light: 'bg-pink-50',
        dark: 'dark:bg-pink-300',
      },
      textColor: 'text-pink-300',
    },
    LinkedIn: {
      url: 'https://linkedin.com/in/sarvesh-rane-80452522a',
      color: 'blue',
      theme: {
        light: 'bg-blue-50',
        dark: 'dark:bg-blue-300',
      },
      textColor: 'text-blue-300',
    },
    Twitter: {
      url: 'https://twitter.com/sarveshrane2000/',
      color: 'lightBlue',
      theme: {
        light: 'bg-lightBlue-50',
        dark: 'dark:bg-lightBlue-300',
      },
      textColor: 'text-lightBlue-300',
    },
    Gmail: {
      url: 'mailto:sarveshrane2000.portfolio-site@gmail.com',
      color: 'red',
      theme: {
        light: 'bg-red-50',
        dark: 'dark:bg-red-300',
      },
      textColor: 'text-red-300',
    },
  };

  const handleIcons = (name) => {
    switch (name) {
      case 'Instagram':
        return (
          <si.SiInstagram className="z-0 relative -left-8 -bottom-8 h-48 w-48 flex self-end text-pink-100 dropDown-pink" />
        );
      case 'LinkedIn':
        return (
          <si.SiLinkedin className="z-0 relative -left-8 -bottom-8 h-48 w-48 flex self-end text-blue-100 dropDown-blue" />
        );
      case 'Twitter':
        return (
          <si.SiTwitter className="z-0 relative -left-8 -bottom-8 h-48 w-48 flex self-end text-lightBlue-100" />
        );
      case 'Gmail':
        return (
          <si.SiGmail className="z-0 relative -left-8 -bottom-8 h-48 w-48 flex self-end text-red-100 dropDown-red" />
        );
      default:
        return 'ERROR: Icon name required';
    }
  };

  return (
    <Layout pagename="/social" prefix={false}>
      <div className="lg:flex justify-between lg:px-16 px-4">
        <div
          className="grid md:grid-cols-2 md:gap-8 gap-4 h-HeightHeroBox my-12 w-full"
          data-testid="social-cards"
        >
          {Object.keys(socialHandles).map((item) => {
            return (
              <a
                href={socialHandles[item]['url']}
                className={`flex-shrink-0 z-50 overflow-hidden flex justify-between ${socialHandles[item].theme.light} transition-all duration-150 hover-dropDown-${socialHandles[item]['color']} cursor-pointer ${socialHandles[item].theme.dark} dark:bg-opacity-5`}
                data-testid="social-link"
                target="_blank"
                rel="noreferrer"
              >
                {handleIcons(item)}
                <h5
                  className={`self-center flex-1 ml-14 font-semibold text-lg ${socialHandles[item].textColor}`}
                >
                  {item}
                </h5>
              </a>
            );
          })}
        </div>
        <div className="flex flex-col justify-between m-auto my-12 lg:ml-16 md:p-8 px-4 py-6 h-HeightHeroBox lg:w-WidthHeroBox w-auto border border-gray-200 dark:border-opacity-20 flex-shrink-0 shadow-soft">
          <form className="flex-1" data-testid="contact-form">
            <h3 className="text-2xl text-center font-extralight mb-8" data-testid="form-header">
              Contact Form
            </h3>
            <input
              type="text"
              placeholder="Name"
              className="border w-full py-3 px-4 text-sm mb-8 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:shadow-inner dark:bg-transparent dark:border-opacity-20"
            />
            <input
              type="text"
              placeholder="Email"
              className="border w-full py-3 px-4 text-sm mb-8 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:shadow-inner dark:bg-transparent dark:border-opacity-20"
            />
            <textarea
              name="Details"
              className="border w-full h-1/3 text-sm px-4 py-3 mb-8 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:shadow-inner dark:bg-transparent dark:border-opacity-20"
              placeholder="Content"
            ></textarea>
            <button
              type="submit"
              className="rounded-none bg-indigo-500 text-white w-full p-3 font-semibold text-sm focus:ring-2 ring-offset-2 ring-indigo-400 dark:ring-offset-gray-900 transition-all duration-100"
            >
              <div className="flex justify-center">Send it !</div>
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Social;
