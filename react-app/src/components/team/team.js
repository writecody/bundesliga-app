import React, { useEffect, useState }from 'react';
import {useParams} from 'react-router-dom';

import {teamInfo} from '../teamInfo';
import {baseUrl} from '../../js/front-end-config';

function Team() {
  let { teamId } = useParams();

  const [teamData, setTeamData] = useState({ teamData: {} });
  
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
      <a href={baseUrl}><i className="fa fa-arrow-left"></i></a>
      
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
        <caption style={{color: `${teamData.primary_color}`, textShadow: `-1px 0px ${teamData.secondary_color}`}} className="team-page__nickname">{teamData.nickname}</caption>

       
        <img className="team-page__image" src={teamData.stadium_image} alt={`${teamData.name}'s stadium`}/>
        <caption style={{color: `${teamData.primary_color}`, textShadow: `-1px 0px ${teamData.secondary_color}`}}>{teamData.stadium_name} at {teamData.location} </caption>
        
        MAPBOX MAP

        CURRENT WEATHER - API

      </div>
    </>
  )
}

export default Team;