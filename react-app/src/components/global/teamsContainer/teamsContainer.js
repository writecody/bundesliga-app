import React from 'react';

import '../../../index.css';
import {teamInfo} from '../../teamInfo.js';



const TeamsContainer = () => {
  return (
    <>
      <div className="teams-container">
          {teamInfo.map((object, index) => {
            return (
              <>
                <div className="teams-container__logo-container">
                  <a key={index} href={`http://localhost:3000/team/${object.teamId}`}>
                    <img
                    className="teams-container__logo" 
                    key={index} 
                    src={object.imageFile} 
                    alt={object.altText} />
                  </a>
                </div>
              </>
            )
          })}
      </div>
    </>
  )
}

export default TeamsContainer;
