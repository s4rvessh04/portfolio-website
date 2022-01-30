import React, { useState, useEffect } from 'react';
import * as di from 'react-icons/di';
import * as hi from 'react-icons/hi';
import Layout from '../components/Layout';

function Projects() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activeRepo, setActiveRepo] = useState({});
  const [activeData, setActiveData] = useState({});
  const [activeContributionsData, setActiveContributionsData] = useState({});
  const [activeRepoLanguages, setActiveRepoLanguages] = useState({});
  const [deplomentUrl, setDeplomentUrl] = useState(null);

  const apiLink = process.env.GATSBY_API_URL;
  const token = process.env.GATSBY_GITHUB_TOKEN;

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/vnd.github.v3+json',
  };

  async function fetchLink(link) {
    try {
      const response = await fetch(link, headers);
      const data = await response.json();
      return data;
    } catch (error) {
      return `No data: ${error}`;
    }
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
      case 'JavaScript':
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
        if (item.homepage) setDeplomentUrl(item.homepage);
        else setDeplomentUrl(null);
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
      case 'JavaScript':
        return {
          color: 'yellow',
          textColor: 'text-yellow-500',
          backgroundColor: 'bg-yellow-500',
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
    async function fetchData() {
      setLoading(true);

      const userData = await fetchLink(apiLink);
      const reposData = await fetchLink(userData.repos_url);
      const contributionData = await fetchLink(reposData[0].contributors_url);
      const languageData = await fetchLink(reposData[0].languages_url);

      setData(reposData);
      setActiveRepo(reposData[0]['name']);
      setActiveData(reposData[0]);
      setActiveContributionsData(totalContributorsContributions(contributionData));
      setActiveRepoLanguages(languageBar(languageData));

      setLoading(false);
    }
    fetchData();
  }, [apiLink]);

  return (
    <>
      <Layout pagename="Projects" prefix={false}>
        <div className="lg:flex justify-between lg:px-16 px-4">
          {isLoading ? (
            <div className="flex flex-1 h-screen justify-center items-center" data-testid="loader">
              <svg
                className="animate-spin -ml-1 mr-3 h-8 w-8 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <h1 className="font-semibold">Loading Data</h1>
            </div>
          ) : (
            activeRepo && (
              <>
                <div
                  className="grid md:grid-cols-3 md:gap-8 gap-4 lg:h-HeightHeroBox my-12 w-full"
                  data-testid="projects-grid"
                >
                  {Object.values(data).map((item) => {
                    return (
                      <button
                        className={`${
                          activeRepo === item.name
                            ? 'shadow-hoverShadow transition-transform duration-150 transform -translate-y-1 translate-x-1'
                            : 'hover-dropDown-gray dark:hover:shadow-none arrow-wrapper'
                        } p-3 relative overflow-hidden bg-gray-50 hover-dropDown-gray dark:bg-opacity-5 flex flex-col flex-shrink-0 cursor-pointer transition-all duration-150 ease-in-out`}
                        onClick={() => handleActiveRepo(item.name)}
                      >
                        <div className="pb-0 relative z-10 text-left">
                          <h5 className="text-lg mb-2">{item.name}</h5>
                          <p className="text-sm font-light leading-5 text-gray-700 dark:text-gray-50">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex justify-end w-full flex-grow">
                          <hi.HiArrowNarrowRight className="animate-arrow duration-150 z-50 h-6 w-6 mr-8 relative text-gray-500 self-center" />
                        </div>
                        {languageIcon(item.language)}
                      </button>
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
                    <p className="text-xs font-normal mt-2">
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
                    <a href={deplomentUrl ? deplomentUrl : null} target="_blank" rel="noreferrer">
                      <button
                        className="rounded-none disabled:opacity-70 disabled:cursor-not-allowed bg-indigo-500 text-white w-full md:p-2 py-2 px-1 border border-indigo-500 font-semibold text-sm focus:ring-2 ring-offset-2 dark:ring-offset-gray-900 ring-indigo-400 transition-all duration-100"
                        disabled={deplomentUrl === null}
                      >
                        <div className="flex justify-center">
                          View Project <hi.HiExternalLink className="h-4 w-4 ml-1" />
                        </div>
                      </button>
                    </a>
                    <a href={activeData.html_url} target="_blank" rel="noreferrer">
                      <button className="rounded-none bg-transparent dark:bg-transparent text-gray-900 dark:text-gray-50 w-full md:p-2 py-2 px-1 font-semibold text-sm border border-gray-900 dark:border-gray-50 focus:ring-2 ring-offset-2 dark:ring-offset-gray-900 ring-gray-900 dark:ring-gray-400 transition-all duration-100">
                        <div className="flex justify-center">
                          View Repository <di.DiGithubBadge className="h-5 w-5 ml-1" />
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </Layout>
    </>
  );
}

export default Projects;
