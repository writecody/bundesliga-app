import React, { useEffect, useState }from 'react';
import {useParams} from 'react-router-dom';

import {teamInfo} from '../teamInfo';

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
      <div className="team-page">

        <div className="team-page__header">
          <img src={teamInfo[teamId - 1].imageFile} alt="team logo" />
          <h1 
            style={{color: `${teamData.primary_color}`, padding: '0', textShadow: `-3px 3px ${teamData.secondary_color}`, width: '100%'}} 
            className="team-page__name">
              {teamData.name}</h1>
        </div>


        <img className="team-page__team-image" src={teamData.team_image} alt="team logo" />
        <h2 className="team-page__nickname">{teamData.nickname}</h2>

       
        <img className="team-page__stadium-image" src={teamData.stadium_image} alt={`${teamData.name}'s stadium`}/>
        <h2 className="team_page__stadium-caption">{teamData.stadium_name} at {teamData.location} </h2>


      </div>
    </>
  )
}

export default Team;