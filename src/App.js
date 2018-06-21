import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';


class App extends Component {
  state = {
    isPlaying: false,
    players: [],
  };

  _startPlaying = (players) => this.setState({ isPlaying: true, players: players }); 

  render() {
    return (
      <div className="App">
        {
          !this.state.isPlaying 
          ? <FirstPage startPlaying={this._startPlaying} /> 
          : <SecondPage players = {this.state.players} />
        }
      </div>
    );
  }
}

export default App;
