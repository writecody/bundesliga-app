import React from 'react';
import '../../index.css';
import DortmundTeamImage from '../../assets/dortmund-team-image.jpeg';
import DortmundStadiumExterior from '../../assets/dortmund-stadium-exterior.jpg';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import Team from '../../components/team/team';

const TeamPage = (
  // {
  //   teamName = 'Borussia Dortmund', 
  //   teamLocation = 'Dortmund, North Rhine-Westphalia, Germany',
  //   teamStadiumName = 'Westfalenstadion',
  //   teamStadiumImageFilePath,
  //   teamSummary,
  //   teamBiography,
  //   teamMascot,
  //   teamPrimaryColor = 'Black',
  //   teamSecondaryColor = 'Yellow'
  // }
) => {

  let match = useRouteMatch();

  // const teamHeaderStyle = {
  //   color: teamPrimaryColor,
  //   fontFamily: 'Contrail One',
  //   letterSpacing: '0.25rem',
  //   margin: '1rem auto',
  //   textAlign: 'center',
  //   textShadow: `0 0.0625rem 0.0625rem ${teamSecondaryColor}`
  // }

  return (
    <>

        <Switch>
          <Route path={`${match.path}/:teamId`} component={Team}/>
        </Switch>

    </>
  )
};

export default TeamPage;