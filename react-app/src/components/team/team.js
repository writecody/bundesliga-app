import React, { useEffect, useState }from 'react';
import {useParams} from 'react-router-dom';

// make fetch call to server to get info for the team with the id in params

function Team(
  
) {
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
    letterSpacing: '0.25rem',
    margin: '1rem auto',
    textAlign: 'center',
    textShadow: `0 0.0625rem 0.0625rem ${teamData.secondary_color}`
  }

  return (
    <>
      <main className="team-page__info-container">

      <div className="team-page__horizontal-bar" />

      <h2 style={teamHeaderStyle}>{teamData.name}</h2>

      <p>{teamData.summary}</p>

      <h3 style={teamHeaderStyle}>Stadium and Location</h3>

      <p className="team-page__photo-caption">{teamData.stadium} at {teamData.location}</p>

      <h3 style={teamHeaderStyle}>About the Team</h3>

      <p>Mascot: {teamData.mascot}</p>

      <p>{teamData.biography}</p>

      </main>

      <i className="fa fa-map-signs"></i>
    </>
  )
}

export default Team;