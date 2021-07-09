import React from 'react';
import * as hi from 'react-icons/hi';
import Layout from '../components/Layout';

function about() {
  return (
    <Layout>
      <div className="lg:flex justify-between lg:px-16 px-4">
        <div className="text-4xl">
          <h2 className="mt-12 mb-8 italic font-semibold">About me</h2>
          <p className="md:leading-45px leading-8 md:text-4xl text-2xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Et harum quidem rerum facilis est et expedita distinctio.
          </p>
        </div>
        <div className="flex flex-col justify-between m-auto my-12 lg:ml-16 md:p-8 px-4 py-6 h-HeightHeroBox lg:w-WidthHeroBox w-auto border border-gray-200 dark:border-opacity-20 flex-shrink-0 shadow-soft">
          <div>
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
              Python, Django, Flask, JavaScript, React, Express, NodeJS, Java, C++, Git, Github,
              Ubuntu, MongoDB and PostgresDB
            </p>
          </div>
          <button className="rounded-none bg-indigo-500 text-white w-full p-3 font-semibold text-sm focus:ring-2 ring-offset-2 dark:ring-offset-gray-900 ring-indigo-400 transition-all duration-100">
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

export default about;
