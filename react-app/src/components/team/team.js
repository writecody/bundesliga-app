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
  
  const teamHeaderStyle = {
    color: teamData.primary_color,
    fontFamily: 'Contrail One',
    fontSize: 'clamp(16px, 3.5vw, 48px)',
    margin: '0 auto',
    textAlign: 'center',
    textShadow: `2px 0px 1px ${teamData.secondary_color}`
    
  }

  return (
    <>
      <div className="team-page">

        <div className="team-page__sidebar">
            <img src={teamInfo[teamId - 1].imageFile} alt="team logo" />

            <h2 style={teamHeaderStyle}>{teamData.name}</h2>
        </div>
          {/* <p>{teamData.summary}</p> */}
          {/* <main className="team-page__info-container">

          

          <h3 style={teamHeaderStyle}>Stadium and Location</h3>
          <p className="team-page__photo-caption">{teamData.stadium} at {teamData.location}</p>

          <h3 style={teamHeaderStyle}>About the Team</h3>
          <p>Mascot: {teamData.mascot}</p>
          <p>{teamData.biography}</p>

          </main> */}
      </div>
    </>
  )
}

export default Team;