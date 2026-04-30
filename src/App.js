// App.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import Button from './components/button';
import Project from './components/project';
import Research from './components/Research';
import {projectData} from './data/projectData';
import {researchData} from './data/researchData';

function App() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <main className="mx-auto px-4 md:w-3/4 lg:w-1/2 max-w-[820px] flex flex-col gap-10">
      <section className="flex flex-col md:flex-row items-center py-12 p-8 rounded-[4rem] shadow-md gap-10 bg-[#2a2a2a] relative">
        <img
          src="https://github.com/ibnuladib.png"
          alt="Profile"
          className="rounded-full mb-6 md:mb-0 w-[220px] h-[220px]"
        />
        <div className="text-center items-center md:text-left grow">
          <div className='items-center'>
            <h2 className="mb-8 text-5xl md:text-6xl lg:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-transparent bg-clip-text">
              Hi, I'm Adib
            </h2>
            <p className="text-2xl md:text-2xl font-bold text-white-400">cs student | wannabe dev</p>
            <div className="lg:ml-16 mt-8 md:mt-12 flex justify-center md:justify-start gap-3">
              {/* <Button btnName="GitHub" />
              <Button btnName="LinkedIn" /> */}

            </div>
            <div className="absolute bottom-8 right-20">
                <a
                href="https://www.linkedin.com/in/ibnul-adib-9b75772a7/"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon size="xl" icon={faLinkedin} />
                </a>
            </div>
            <div className="absolute bottom-8 right-28">
                <a
                href="https://github.com/ibnuladib"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon size="xl" icon={faGithub} />
                </a>
            </div>


          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-200 ${
            activeTab === 'projects'
              ? 'bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-white'
              : 'bg-[#2a2a2a] text-gray-400 hover:text-white'
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab('experience')}
          className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-200 ${
            activeTab === 'experience'
              ? 'bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-white'
              : 'bg-[#2a2a2a] text-gray-400 hover:text-white'
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveTab('research')}
          className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-200 ${
            activeTab === 'research'
              ? 'bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-white'
              : 'bg-[#2a2a2a] text-gray-400 hover:text-white'
          }`}
        >
          Research
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'projects' && (
        <section className="bottom " style={{width: "100%"}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Project {...projectData.project1} />
              <Project {...projectData.project2} />
              <Project {...projectData.project3} />
              <Project {...projectData.project4} />
              <Project {...projectData.project5} />
              <Project {...projectData.project6} />
              <Project {...projectData.project7} />
              <Project {...projectData.project8} />
              <Project {...projectData.project9} />
              <Project {...projectData.project10} />
              <Project {...projectData.project11} />
              <Project {...projectData.project12} />
              <Project {...projectData.project13} />
              <Project {...projectData.project14} />
              <Project {...projectData.project15} />
              <Project {...projectData.project16} />
              <Project {...projectData.project17} />
              <Project {...projectData.project18} />
              <Project {...projectData.project19} />
              <Project {...projectData.project20} />
          </div>
        </section>
      )}

      {activeTab === 'experience' && (
        <section className="bg-[#2a2a2a] rounded-[2rem] shadow-md p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Work Experience</h3>
          <div className="text-center text-gray-400">
            <p className="text-lg">Coming soon...</p>
          </div>
        </section>
      )}

      {activeTab === 'research' && (
        <section className="bottom " style={{width: "100%"}}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {researchData.papers.map((paper, index) => (
              <Research key={index} {...paper} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
