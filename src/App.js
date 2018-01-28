import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import ResumePage from './Components/ResumePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="resume" exact path="/resume" component={ResumePage} />
        </div>
      </Router>
    )
  }
}
export default App;