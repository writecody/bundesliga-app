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
        <div className="info-container__section">
          <p>Learn more about the Bundesliga:</p>
          <a className="info-container__section__link" href="https://www.bundesliga.com" target="_blank">Bundesliga Official Website</a>
          <a className="info-container__section__link" href="https://en.wikipedia.org/wiki/Bundesliga" target="_blank">Bundesliga Wikipedia Article</a>
          <a className="info-container__section__link" href="https://www.dfb.de/en/en-start/" target="_blank">Deutscher Fussball-Bund (German Football Association)</a>
        </div>
      </div>
    </>
  )
}

export default TeamsContainer;
