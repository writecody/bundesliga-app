import React from 'react';
import '../../../index.css';
import { teamInfo } from '../../teamInfo';

import MapboxGLMap from '../../MapboxGLMap/MapboxGLMap';

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
                    src={object.imageFile} 
                    alt={object.altText} />
                  </a>
                </div>
              </>
            )
          })}
      </div>
      <div className="info-container">
        <div id="map" className="info-container__section">
          <MapboxGLMap />
        </div>

      </div>
    </>
  )
}

export default TeamsContainer;
