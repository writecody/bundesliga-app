import React from 'react';
import '../../../index.css';
import { teamInfo } from '../../../js/teamInfo';

import MapboxGLMap from '../../MapboxGLMap/MapboxGLMap';

const TeamsContainer = () => {
  return (
    <>
      <div className="teams-container">
          {teamInfo.map((object, index) => {
            return (
              <>
                <div key={index} className="teams-container__logo-container">
                  <a href={`/team/${object.team_id}`}>
                    <img
                    className="teams-container__logo" 
                    src={object.logo_image} 
                    alt={object.alt_text} />
                  </a>
                </div>
              </>
            )
          })}
      </div>
      <div className="info-container">
        <div id="map" className="info-container__map">
          <MapboxGLMap />
        </div>
        <div className="info-container__links">
          <p>Learn more about the Bundesliga via the links below:</p>
          <a className="info-container__section__link" href="https://www.bundesliga.com" target="_blank" rel="noopener noreferrer">Bundesliga Official Website</a>
          <a className="info-container__section__link" href="https://en.wikipedia.org/wiki/Bundesliga" target="_blank" rel="noopener noreferrer">Bundesliga Wikipedia Article</a>
          <a className="info-container__section__link" href="https://www.dfb.de/en/en-start/" target="_blank" rel="noopener noreferrer">Deutscher Fussball-Bund (German Football Association)</a>
        </div>
      </div>
    </>
  )
}

export default TeamsContainer;
