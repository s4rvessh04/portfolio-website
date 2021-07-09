import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      <div className="lg:flex justify-between lg:px-16 px-4">
        <div className="lg:mt-16 mt-8">
          <section className="text-4xl italic mb-12">
            <h1 className="mb-2">Hi there,</h1>
            <h1>I am Sarvesh Rane</h1>
          </section>
          <h1 className="text-5xl font-black italic mb-20">
            Adding, Commiting and Pushing Code since 2019.
          </h1>
          <Link to="/social">
            <button className="rounded-none mb-1 text-lg font-semibold border border-indigo-400 bg-indigo-50 text-indigo-500 px-3 py-2 focus:ring-2 ring-offset-2 ring-indigo-400 dark:ring-offset-gray-900 transition-all duration-100 dark:bg-transparent">
              Let's Connect
            </button>
          </Link>
        </div>
        <div className="mx-auto my-12 lg:ml-36 h-1/3 max-w-max flex-shrink-0 shadow-hoverShadow">
          <img src="/HeroResized.png" alt="Hero" className="m-auto object-contain" />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
