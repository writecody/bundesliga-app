import React from 'react';
import TeamsContainer from '../../components/global/teamsContainer/teamsContainer';
import '../../index.css';

const MainPage = () => {

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