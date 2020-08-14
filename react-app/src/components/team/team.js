import React, { useEffect, useState, useRef }from 'react';
import { useParams } from 'react-router-dom';

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import { teamInfo } from '../teamInfo';

function Team() {
  let { teamId } = useParams();

  const [teamData, setTeamData] = useState({ teamData: {} });

  const Map = ReactMapboxGl({
    accessToken:
      process.env.REACT_APP_MAPBOX_KEY
  });

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:5000/teams/${teamId}`)
        .then(response => response.json())
        .then(data => setTeamData(data));
    };

    fetchData();
  }, [teamId]);

  return (
    <>
      <a href="http://localhost:3000"><i className="fa fa-arrow-left"></i></a>
      
      <div id="team-page-container" className="team-page">

        <div className="team-page__header">
          <img src={teamInfo[teamId - 1].imageFile} alt="team logo" />
          <h1 
            style={{color: `${teamData.primary_color}`, padding: '0', textShadow: `-1px 0px ${teamData.secondary_color}`, width: '100%'}} 
            className="team-page__name">
              {teamData.name}
          </h1>
        </div>

        <img className="team-page__image" src={teamData.team_image} alt="team logo" />
        <h2 style={{color: `${teamData.primary_color}`, textShadow: `-1px 0px ${teamData.secondary_color}`}} className="team-page__caption">{teamData.nickname}</h2>

        <img className="team-page__image" src={teamData.stadium_image} alt={`${teamData.name}'s stadium`}/>
        <h2 style={{color: `${teamData.primary_color}`, textShadow: `-1px 0px ${teamData.secondary_color}`}} className="team-page__caption">{teamData.stadium_name} at {teamData.location}</h2>
        
        <div className="team-page__location-info">
          <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: '100vh',
              width: '100vw'
            }}
          >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
              <Feature coordinates={[-0.481747846041145, 88.3233379650232]} />
            </Layer>
          </Map>
        </div>

        CURRENT WEATHER - API

      </div>
    </>
  )
}

export default Team;