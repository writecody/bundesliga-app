import React from 'react';
import Team from '../../components/team/team';
import Header from '../../components/global/header/header';
import '../../index.css';

const TeamPage = (
  {
    teamName, 
    teamLogoImageFilePath, 
    teamSummary,
    teamLocation,
    teamStadiumName,
    teamStadiumImageFilePath,
    teamBiography,
  }
) => {

  return (
    <>
      team name and logo section
      {/* <Header title={teamName}/>  */}
      <Header title="Team Name"/> 
      {/* TODO: to add alt text, invoke a function that returns a string including the teamName and concatenates additional string content */}
      <img src={teamLogoImageFilePath} alt={teamName} />
      
      team summary and location section
      <p>{teamSummary}</p>
      <p><span>{teamLocation}</span></p>
      
      team stadium section
      <img src={teamStadiumImageFilePath} alt={teamStadiumName} />
      <p><span>{teamStadiumName}</span></p>

      team biography section
      <p>{teamBiography}</p>
    </>
  )
};

export default TeamPage;