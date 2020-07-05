import React from 'react';
import TeamsContainer from '../../components/global/teamsContainer/teamsContainer';
import Header from '../../components/global/header/header';
import '../../index.css';


const MainPage = () => {

  return (
    <>
      <main>
        <Header title={'Teams of the Bundesliga'} />
        <TeamsContainer />
      </main>
    </>
  )
};

export default MainPage;