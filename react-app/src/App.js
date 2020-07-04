import React from 'react';
import './App.css';
import Main from '../src/pages/main/main';
import Teams from '../src/pages/teams/teams';
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
          <Link to="/" className="link">Main</Link>
          <Link to="/teams" className="link">Teams</Link>
        </div>

        <Route exact path="/" component={Main} />
        <Route exact path="/teams" component={Teams} />

      </div>

    </Router>
  );
}

export default App;
