import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { teamInfo } from '../teamInfo';

function Team() {
  let { teamId } = useParams();

  const [teamData, setTeamData] = useState({ teamData: {} });

  const teamObject = teamInfo[teamId - 1];

  const goBack = () => window.history.back();
  
  useEffect(() => {
    // const fetchData = async () => {
    //   await fetch(`http://localhost:5000/teams/${teamId}`)
    //     .then(response => response.json())
    //     .then(data => setTeamData(data));
    // };

    // fetchData();
  }, [teamId, teamInfo]);
  
  return (
    <>
      <a onClick={goBack}><i className="fa fa-arrow-left"></i></a>
      
      <div id="team-page-container" className="team-page">

        <div className="team-page__header">
          <img src={teamObject.logo_image} alt="team logo" />
          <h1 
            style={{color: `${teamObject.primary_color}`, padding: '0', textShadow: `-1px 0px ${teamObject.secondary_color}`, width: '100%'}} 
            className="team-page__name">
              {teamObject.name}
          </h1>
        </div>

        <img className="team-page__image" src={teamObject.team_image} alt="team logo" />
        <h2 style={{color: `${teamObject.primary_color}`, textShadow: `-1px 0px ${teamObject.secondary_color}`}} className="team-page__caption">{teamObject.nickname}</h2>

        <img className="team-page__image" src={teamObject.stadium_image} alt={`${teamObject.name}'s stadium`}/>
        <h2 style={{color: `${teamObject.primary_color}`, textShadow: `-1px 0px ${teamObject.secondary_color}`}} className="team-page__caption">{teamObject.stadium_name} at {teamObject.location}</h2>
      </div>

      <a onClick={goBack}><i className="fa fa-arrow-left"></i></a>
    </>
  )
}

export default Team;
