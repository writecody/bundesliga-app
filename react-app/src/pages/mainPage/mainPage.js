import React from 'react';
import TeamsContainer from '../../components/global/teamsContainer/teamsContainer';
import Header from '../../components/global/header/header';
import '../../index.css';

const MainPage = () => {

  // const createWordmark = () => {
  //   // const word = 'BUNDESLIGA';
  //   return [...'BUNDESLIGA'];
  // }

  const letters = [...'BUNDESLIGA'];

  return (
    <>
      <div className="header">
        {letters.map((letter, index) => (
          <h1 key={index} className="header__letter">{letter}</h1>
        ))}
      </div>

      <main>
        <TeamsContainer />
      </main>
    </>
  )
};

export default MainPage;