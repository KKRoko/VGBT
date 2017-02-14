import React, { Component } from 'react';
import HomePics from './components/homepage/HomePics';
import SignupLoginForm from './container/homepage/SignupLoginForm';

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Vegan Girls Taste Better</h2>
          <p>because we do</p>
        </div>
        <div className="homepage-container" >
          <HomePics />
          <SignupLoginForm />
        </div>
      </div>
    );
  }
}

export default App;
