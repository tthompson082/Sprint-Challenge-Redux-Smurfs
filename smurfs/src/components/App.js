import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import UpdateSmurf from './UpdateSmurf';

import './App.css'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
          <Link to='/'><h1 className='title'>Smurfs</h1></Link>
          <Route exact path='/' component={SmurfList} />
          <Route path='/add-smurf' component={SmurfForm} />
          <Route path='/smurf/:id' component={UpdateSmurf} />
        </div>
      </Router>
    );
  }
}

export default App;
