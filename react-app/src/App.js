import React from 'react';
import './App.css';
import Main from '../src/pages/main/main';
import Teams from '../src/pages/teams/teams';
import PatternLibrary from '../src/pages/patternLibrary/patternLibrary';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


function App() {
  return (
    <Router>

      <div className="App">
        
        <nav>
          <Link to="/" className="link">Main</Link>
          <Link to="/teams" className="link">Teams</Link>
          <Link to="/pattern-library" className="link">Pattern Library</Link>
        </nav>

        <Route exact path="/" component={Main} />
        <Route path="/teams" component={Teams} />
        <Route path="/pattern-library" component={PatternLibrary} />

      </div>

    </Router>
  );
}

export default App;
