import React, { useState, useEffect } from 'react';
import * as di from 'react-icons/di';
import * as hi from 'react-icons/hi';
import Layout from '../components/Layout';

function Projects() {
  const [data, setData] = useState([]);
  const [activeRepo, setActiveRepo] = useState({});
  const [activeData, setActiveData] = useState({});
  const [activeContributionsData, setActiveContributionsData] = useState({});
  const [activeRepoLanguages, setActiveRepoLanguages] = useState({});
  const [deplomentUrl, setDeplomentUrl] = useState([]);

  const apiLink = `${process.env.GATSBY_API_URL}`;
  const token = `${process.env.GATSBY_GITHUB_TOKEN}`;

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/vnd.github.v3+json',
  };

  async function fetchLink(link) {
    try {
      const response = await fetch(link, { headers });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return 'No data';
    }
  }

  async function fetchData() {
    const userData = await fetchLink(apiLink);
    const reposData = await fetchLink(userData.repos_url);
    const contributionData = await fetchLink(reposData[0].contributors_url);
    const languageData = await fetchLink(reposData[0].languages_url);

    setData(reposData);
    setActiveRepo(reposData[0]['name']);
    setActiveData(reposData[0]);
    setActiveContributionsData(totalContributorsContributions(contributionData));
    setActiveRepoLanguages(languageBar(languageData));

    return true;
  }

  async function totalContributorsContributions(data) {
    const fulfilledData = await data;
    let totalContributions = 0;
    let totalContributors = 0;

    if (fulfilledData !== 'No data') {
      Object.values(fulfilledData).forEach((item) => {
        totalContributions += item.contributions;
      });
    }

    setActiveContributionsData({
      totalContributors: totalContributors,
      totalContributions: totalContributions,
    });

    return true;
  }

  async function languageBar(data) {
    const fulfilledData = await data;

    if (Object.keys(fulfilledData).length === 0) {
      setActiveRepoLanguages(null);
      return false;
    }

    const total = Object.values(fulfilledData).reduce((a, b) => a + b, 0);

    let percentLanguage = {};

    for (let item in fulfilledData) {
      percentLanguage[item] = ((fulfilledData[item] * 100) / total).toFixed(1);
    }

    setActiveRepoLanguages(percentLanguage);

    return true;
  }

  const languageIcon = (name) => {
    switch (name) {
      case 'Python':
        return (
          <di.DiPython className="object-none object-left-bottom z-0 h-40 w-40 absolute -left-8 -bottom-8 text-gray-200 dark:text-opacity-20 dropDown-gray" />
        );
      case 'HTML':
        return (
          <di.DiHtml5 className="object-none object-left-bottom z-0 h-40 w-40 absolute -left-8 -bottom-8 text-gray-200 dark:text-opacity-20 dropDown-gray" />
        );
      case 'Javascript':
        return (
          <di.DiJavascript1 className="object-none object-left-bottom z-0 h-40 w-40 absolute -left-8 -bottom-8 text-gray-200 dark:text-opacity-20 dropDown-gray" />
        );
      default:
        return (
          <di.DiGithubBadge className="object-none object-left-bottom z-0 h-40 w-40 absolute -left-8 -bottom-8 text-gray-200 dark:text-opacity-20 dropDown-gray" />
        );
    }
  };

  const handleActiveRepo = (repoName) => {
    setActiveRepo(repoName);
    Object.values(data).forEach((item) => {
      if (item.name === repoName) {
        setActiveData(item);
        totalContributorsContributions(fetchLink(item.contributors_url));
        languageBar(fetchLink(item.languages_url));
        fetchLink(item.deployments_url).then((items) => {
          setDeplomentUrl(items);
        });
      }
    });
  };

  const handleLanguageColors = (name) => {
    switch (name) {
      case 'Python':
        return {
          color: 'purple',
          textColor: 'text-purple-500',
          backgroundColor: 'bg-purple-500',
        };
      case 'HTML':
        return {
          color: 'red',
          textColor: 'text-red-500',
          backgroundColor: 'bg-red-500',
        };

      case 'CSS':
        return {
          color: 'lightBlue',
          textColor: 'text-lightBlue-500',
          backgroundColor: 'bg-lightBlue-500',
        };

      default:
        return {
          color: 'gray',
          textColor: 'text-gray-500',
          backgroundColor: 'bg-gray-500',
        };
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiLink]);

  return (
    <>
      {data && activeRepo && (
        <Layout pagename="/projects" prefix={false}>
          <div className="lg:flex justify-between lg:px-16 px-4">
            <div
              className="grid md:grid-cols-3 md:gap-8 gap-4 lg:h-HeightHeroBox my-12 w-full"
              data-testid="projects-grid"
            >
              {Object.values(data).map((item) => {
                return (
                  <div
                    className={`${
                      activeRepo === item.name
                        ? 'shadow-hoverShadow transition-transform duration-150 transform -translate-y-1 translate-x-1'
                        : 'hover-dropDown-gray dark:hover:shadow-none arrow-wrapper'
                    } p-3 relative overflow-hidden bg-gray-50 hover-dropDown-gray dark:bg-opacity-5 flex flex-col flex-shrink-0 cursor-pointer transition-all duration-150 ease-in-out`}
                    onClick={() => handleActiveRepo(item.name)}
                  >
                    <div className="pb-0 relative z-10">
                      <h5 className="text-lg mb-2">{item.name}</h5>
                      <p className="text-sm font-light leading-5 text-gray-700 dark:text-gray-50">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex justify-end flex-grow">
                      <hi.HiArrowNarrowRight className="animate-arrow duration-150 z-50 h-6 w-6 mr-8 relative text-gray-500 self-center" />
                    </div>
                    {languageIcon(item.language)}
                  </div>
                );
              })}
            </div>
            <div
              className="flex flex-col justify-between m-auto my-12 lg:ml-16 md:p-8 px-4 py-6 h-HeightHeroBox lg:w-WidthHeroBox w-auto border border-gray-200 dark:border-opacity-20 flex-shrink-0 shadow-soft"
              data-testid="project-details-card"
            >
              <div className="wrapper">
                <h3 className="text-2xl text-center font-extralight mb-8">Details</h3>
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-opacity-20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm leading-5">
                    <span className="px-4 font-medium text-sm bg-white dark:bg-gray-900">
                      Total Contributors and Contributions
                    </span>
                  </div>
                </div>
                <p className="text-sm font-light text-center">
                  Contributors: {activeContributionsData.totalContributors}
                </p>
                <p className="text-sm font-light text-center">
                  Contributions: {activeContributionsData.totalContributions}
                </p>
              </div>
              <div className="wrapper">
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-opacity-20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm leading-5">
                    <span className="px-4 font-medium text-sm bg-white dark:bg-gray-900">
                      Forking Status
                    </span>
                  </div>
                </div>
                <p className="text-sm font-light text-center">
                  {activeData.forked ? 'Forked' : 'Not Forked'}
                </p>
              </div>
              <div className="wrapper">
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-opacity-20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm leading-5">
                    <span className="px-4 font-medium text-sm bg-white dark:bg-gray-900">
                      Languages
                    </span>
                  </div>
                </div>
                <div className="w-full flex" data-testid="language-bar">
                  {activeRepoLanguages !== null ? (
                    Object.keys(activeRepoLanguages).map((item) => {
                      return (
                        <div
                          style={{ width: `${activeRepoLanguages[item]}%` }}
                          className={`${handleLanguageColors(item).backgroundColor} p-1`}
                        ></div>
                      );
                    })
                  ) : (
                    <div className="w-full bg-gray-500 p-1"></div>
                  )}
                </div>
                <p className="text-xs font-light mt-2">
                  {activeRepoLanguages !== null ? (
                    Object.keys(activeRepoLanguages).map((item) => {
                      return (
                        <span className={`pl-1 mr-2 ${handleLanguageColors(item).textColor}`}>
                          {item}: {`${activeRepoLanguages[item]}%`}
                        </span>
                      );
                    })
                  ) : (
                    <span>{'No languages found'}</span>
                  )}
                </p>
              </div>
              <div className="grid grid-cols-2 md:gap-5 gap-2" data-testid="button-grid">
                <a href={deplomentUrl[0] !== undefined ? deplomentUrl[0] : null}>
                  <button
                    className="rounded-none disabled:opacity-70 disabled:cursor-not-allowed bg-indigo-500 text-white w-full md:p-2 py-2 px-1 border border-indigo-500 font-semibold text-sm focus:ring-2 ring-offset-2 ring-offset-gray-900 ring-indigo-400 transition-all duration-100"
                    disabled={deplomentUrl.length === 0}
                  >
                    <div className="flex justify-center">
                      View Project <hi.HiExternalLink className="h-4 w-4 ml-1" />
                    </div>
                  </button>
                </a>
                <a href={activeData.html_url}>
                  <button className="rounded-none bg-white dark:bg-transparent text-gray-900 dark:text-gray-50 w-full md:p-2 py-2 px-1 font-semibold text-sm border border-gray-900 dark:border-gray-50 focus:ring-2 ring-offset-2 ring-offset-gray-900 ring-gray-400 transition-all duration-100">
                    <div className="flex justify-center">
                      View Repository <di.DiGithubBadge className="h-5 w-5 ml-1" />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

export default Projects;
