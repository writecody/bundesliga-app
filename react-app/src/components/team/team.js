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

        <div className="team-page__summary">
          <div className="team-page__summary__awning">
            <p style={{ color: `${teamData.primary_color}`, textShadow: `1px 0 1px ${teamData.secondary_color}`, letterSpacing: `1px` }}>
              {teamData.name}
            </p>
          </div>
          <p>{teamData.summary}</p>
        </div>
            
        <div className="team-page__main">
          <div className="team-page__main__team-image">
            <img src="../../../assets/maxresdefault.jpg" alt="team image" />
            <p>Mascot: {teamData.mascot}</p>
          </div>

          <div className="team-page__main__logo">
            <img src={teamInfo[teamId - 1].imageFile} alt="team logo" />
          </div>
        
          <div className="team-page__main__geography">
            <h3 >Stadium and Location</h3>
            STADIUM PHOTO
            {teamData.stadium} at {teamData.location} 
            MAPBOX MAP
          </div>
        </div>    

      </div>
    </>
  )
}

export default Team;