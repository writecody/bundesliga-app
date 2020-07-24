import React from 'react';
import {useParams} from 'react-router-dom';

// make fetch call to server to get info for the team with the id in params

function Team(
  {
    teamName = '', 
    teamLocation = '',
    teamStadiumName = '',
    teamStadiumImageFilePath,
    teamSummary,
    teamBiography,
    teamMascot,
    teamPrimaryColor = '',
    teamSecondaryColor = ''
  }

  
) {
  let { teamId } = useParams();

  const teamHeaderStyle = {
    color: teamPrimaryColor,
    fontFamily: 'Contrail One',
    letterSpacing: '0.25rem',
    margin: '1rem auto',
    textAlign: 'center',
    textShadow: `0 0.0625rem 0.0625rem ${teamSecondaryColor}`
  }

  return (
    <>
      <main className="team-page__info-container">

      <div className="team-page__horizontal-bar" />

      <h2 style={teamHeaderStyle}>{teamName}</h2>

      {/* TODO: to add alt text, invoke a function that returns a string including the teamName and concatenates additional string content */}

      {/* <img src={DortmundTeamImage} alt="team-photo" className="team-page__photo"></img> */}

      <p>{teamSummary}</p>
      {/* <p className="team-page__team-summary">Founded in 1909 by eighteen football players from Dortmund, the football team is part of a large membership-based sports club with more than 145,000 members, making Borussia Dortmund the second largest sports club by membership in Germany. The club has active departments in other sports, namely in women's handball. Since 1974, Dortmund have played their home games at Westfalenstadion; the stadium is the largest in Germany, and Dortmund has the highest average attendance of any association football club in the world.</p> */}

      <h3 style={teamHeaderStyle}>Stadium and Location</h3>

      {/* <img src={DortmundStadiumExterior} alt={teamStadiumName} className="team-page__stadium-image"/> */}
      {/* <img src={teamStadiumImageFilePath} alt={teamStadiumName} /> */}
      {/* <p><span>{teamStadiumName}</span></p> */}

      <p className="team-page__photo-caption">{teamStadiumName} at {teamLocation}</p>

      {/* <p><span className="team-stadium-name">Westfalenstadion</span></p> */}

      <h3 style={teamHeaderStyle}>About the Team</h3>

      <p>{teamBiography}</p>
      {/* <p>In 2002, Borussia Dortmund won their third Bundesliga title. Dortmund had a remarkable run at the end of the season to overtake Bayer Leverkusen, securing the title on the final day. Manager Matthias Sammer became the first person in Borussia Dortmund history to win the Bundesliga as both a player and manager. In the same season, Borussia lost the final of the 2001–02 UEFA Cup to Dutch side Feyenoord.

      Dortmund's fortunes then steadily declined for a number of years. Poor financial management led to a heavy debt load and the sale of their Westfalenstadion grounds. The situation was compounded by failure to advance in the 2003–04 UEFA Champions League, when the team was eliminated on penalties in the qualifying rounds by Club Brugge. In 2003, Bayern Munich loaned €2 million to Dortmund for several months to pay their payroll. Borussia was again driven to the brink of bankruptcy in 2005, the original €11 value of its shares having plummeted by over 80% on the Frankfurt Stock Exchange.</p> */}

      </main>

      <p>Team ID: {teamId}</p>
      <i class="fa fa-map-signs"></i>
    </>
  )
}

export default Team;