import React, { Component } from 'react';

import '../node_modules/normalize.css/normalize.css';

import logo from './logo.svg';
import './App.css';

import QuestionsContainer from './QuestionsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Questions</h1>
        </header>
        <QuestionsContainer />
      </div>
    );
  }
}

export default App;
