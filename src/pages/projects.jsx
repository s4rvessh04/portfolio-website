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

  const apiLink = 'https://api.github.com/users/targusrock';

  const token = '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';

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/vnd.github.v3+json',
  };

  useEffect(() => {
    fetchData();
  }, [apiLink]);

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
    let totalContributions = 0;
    let totalContributors = 0;

    Object.values(await data).forEach((item) => {
      totalContributions += item.contributions;
    });

    setActiveContributionsData({
      totalContributors: totalContributors,
      totalContributions: totalContributions,
    });

    return true;
  }

  async function languageBar(data) {
    const fulfilledData = await data;

    if (Object.keys(fulfilledData).length === 0) {
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
          <di.DiPython className="object-none object-left-bottom z-0 h-40 w-40 absolute -left-8 -bottom-8 text-gray-200 dropDown-gray" />
        );
      case 'HTML':
        return (
          <di.DiHtml5 className="object-none object-left-bottom z-0 h-40 w-40 absolute -left-8 -bottom-8 text-gray-200 dropDown-gray" />
        );
      case 'Javascript':
        return (
          <di.DiJavascript1 className="object-none object-left-bottom z-0 h-40 w-40 absolute -left-8 -bottom-8 text-gray-200 dropDown-gray" />
        );
      default:
        return (
          <di.DiGithubBadge className="object-none object-left-bottom z-0 h-40 w-40 absolute -left-8 -bottom-8 text-gray-200 dropDown-gray" />
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
      }
    });
  };

  const handleLanguageColors = (name) => {
    switch (name) {
      case 'Python':
        return 'purple';
      case 'HTML':
        return 'red';
      case 'CSS':
        return 'lightBlue';
      default:
        return 'gray';
    }
  };
  console.log(activeRepoLanguages === 'No data');
  return (
    <>
      {data && (
        <Layout>
          <div className="lg:flex justify-between lg:px-16 px-4">
            <div className="grid md:grid-cols-3 md:gap-8 gap-4 lg:h-HeightHeroBox my-12 w-full">
              {Object.values(data).map((item) => {
                return (
                  <div
                    className={`${
                      activeRepo === item.name
                        ? 'shadow-hoverShadow transition-all duration-150 transform -translate-y-1 translate-x-1'
                        : 'hover:shadow-hoverShadow transition-all duration-150 arrow-wrapper'
                    } p-3 relative overflow-hidden bg-gray-50 flex flex-col flex-shrink-0 cursor-pointer`}
                    onClick={() => handleActiveRepo(item.name)}
                  >
                    <div className="pb-0 relative z-10">
                      <h5 className="text-lg mb-2">{item.name}</h5>
                      <p className="text-sm font-light leading-5 text-gray-700">
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
            <div className="flex flex-col justify-between m-auto my-12 lg:ml-16 md:p-8 px-4 py-6 h-HeightHeroBox lg:w-WidthHeroBox w-auto border border-gray-200 flex-shrink-0 shadow-soft">
              <div className="wrapper">
                <h3 className="text-2xl text-center font-extralight mb-8">Details</h3>
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm leading-5">
                    <span className="px-4 font-medium text-sm bg-white">
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
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm leading-5">
                    <span className="px-4 font-medium text-sm bg-white">Forking Status</span>
                  </div>
                </div>
                <p className="text-sm font-light text-center">
                  {activeData.forked ? 'Forked' : 'Not Forked'}
                </p>
              </div>
              <div className="wrapper">
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm leading-5">
                    <span className="px-4 font-medium text-sm bg-white">Languages</span>
                  </div>
                </div>
                <div className="w-full flex">
                  {activeRepoLanguages === true ? (
                    Object.keys(activeRepoLanguages).map((item) => {
                      return (
                        <div
                          style={{ width: `${activeRepoLanguages[item]}%` }}
                          className={`bg-${handleLanguageColors(item)}-500 p-1`}
                        ></div>
                      );
                    })
                  ) : (
                    <div className="w-full bg-gray-500 p-1"></div>
                  )}
                </div>
                <p className="text-xs font-light mt-2">
                  {activeRepoLanguages === true ? (
                    Object.keys(activeRepoLanguages).map((item) => {
                      return (
                        <span>
                          {item}: {activeRepoLanguages[item]}
                        </span>
                      );
                    })
                  ) : (
                    <span>{'No languages found'}</span>
                  )}
                </p>
              </div>
              <div className="grid grid-cols-2 md:gap-5 gap-2">
                <button className="bg-indigo-500 text-white w-full md:p-2 py-2 px- font-semibold text-sm focus:ring-2 ring-offset-2 ring-indigo-400 transition-all duration-100">
                  <div className="flex justify-center">
                    View Project <hi.HiExternalLink className="h-4 w-4 ml-1" />
                  </div>
                </button>
                <button className="bg-white text-gray-900 w-full md:p-2 py-2 px-1 font-semibold text-sm border border-gray-900 focus:ring-2 ring-offset-2 ring-gray-400 transition-all duration-100">
                  <div className="flex justify-center">
                    View Repository <di.DiGithubBadge className="h-5 w-5 ml-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

export default Projects;
