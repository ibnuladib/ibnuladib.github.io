// src/components/Research.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faLink, faFlask } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function Research(props) {
  return (
    <div className='bg-[#2a2a2a] py-9 p-8 rounded-[2rem] shadow-md mb-6'>
      <h1 className="text-2xl font-bold mb-2 text-white">{props.title}</h1>
      <h2 className="text-lg text-fuchsia-400 mb-3">{props.venue}</h2>
      <p className="text-sm text-gray-500 mb-4">{props.date}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {Array.isArray(props.tags) && props.tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm bg-gray-700 px-3 py-1 rounded-full text-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-gray-300 mb-4">{props.description}</p>

      {props.methodology && (
        <div className="mb-4">
          <h3 className="text-md font-semibold text-white mb-2 flex items-center gap-2">
            <FontAwesomeIcon icon={faFlask} className="text-fuchsia-400" />
            Methodology:
          </h3>
          <p className="text-gray-300">{props.methodology}</p>
        </div>
      )}

      {props.achievements && (
        <div className="mb-4">
          <h3 className="text-md font-semibold text-white mb-2">Achievements:</h3>
          <ul className="text-gray-300 list-disc list-inside">
            {props.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-4 mt-4">
        {props.pdfLink && (
          <a
            href={props.pdfLink}
            className="text-red-400 hover:text-red-300 transition-colors duration-200 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFilePdf} />
            <span>PDF</span>
          </a>
        )}
        {props.aclLink && (
          <a
            href={props.aclLink}
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLink} />
            <span>ACL Anthology</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default Research;
