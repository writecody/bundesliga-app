import React from 'react';
import './App.css';
import MainPage from './pages/mainPage/mainPage';
import TeamPage from '../src/pages/teamPage/teamPage';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <Router>

      <div className="App">
        
        <div>
          <Link to="/" className="link">Main Page</Link>
          <Link to="/team" className="link">Team Page</Link>
        </div>

        <Route exact path="/" component={MainPage} />
        <Route exact path="/team" component={TeamPage} />

      </div>

    </Router>
  );
}

export default App;
