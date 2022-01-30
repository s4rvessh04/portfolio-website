import React from 'react';
import * as hi from 'react-icons/hi';
import Layout from '../components/Layout';

function About() {
  return (
    <Layout pagename="About" prefix={false}>
      <div className="lg:flex justify-between lg:px-16 px-4">
        <div className="text-4xl" data-testid="hero-text-section">
          <h2 className="mt-12 mb-8 italic font-semibold" data-testid="hero-header">
            About me
          </h2>
          <p
            className="md:leading-45px leading-8 md:text-4xl text-2xl font-light"
            data-testid="hero-paragraph"
          >
            I am an engineering student majoring in Electronics and Telecommunications in Pune,
            India. I like coding, and tech fascinates me. Currently pursuing third year of
            engineering.
            <br />
            Other than coding I like to meet new people, explore new places, play chess and
            badminton. I am open to new ideas, collaborative work and sharing my knowledge with
            others.
          </p>
        </div>
        <div
          className="flex flex-col justify-between m-auto my-12 lg:ml-16 md:p-8 px-4 py-6 h-HeightHeroBox lg:w-WidthHeroBox w-auto border border-gray-200 dark:border-opacity-20 flex-shrink-0 shadow-soft"
          data-testid="descriptive-card"
        >
          <div data-testid="card-content">
            <h3 className="text-2xl text-center font-extralight mb-8">Skill Belt</h3>
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-opacity-20"></div>
              </div>
              <div className="relative flex justify-center text-sm leading-5">
                <span className="px-4 font-medium text-sm bg-white dark:bg-gray-900">
                  Coding Proficieny
                </span>
              </div>
            </div>
            <p className="text-sm font-light text-center">
              Python, Django, Flask, FastApi, JavaScript, React, Gatsby, Express, NodeJS, Java, C++,
              Git, Github, MySQL, Sqlite and MongoDB.
            </p>
          </div>
          <button
            className="rounded-none bg-indigo-500 text-white w-full p-3 font-semibold text-sm focus:ring-2 ring-offset-2 dark:ring-offset-gray-900 ring-indigo-400 transition-all duration-100"
            data-testid="card-button"
          >
            <div className="flex justify-center">
              <hi.HiOutlineDownload className="h-4 w-4 mr-2" />
              Download my resume !
            </div>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default About;
