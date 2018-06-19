import React, { Component } from 'react';
import Header from './HeaderFirstPage';
import Table from './Table';
import AddRound from './AddRound';

class SecondPage extends Component {

  state= {
    scores: []
  }

  _changeScores = (scores) => this.setState({scores: scores});
  _addNewRow = (newScore) => this.setState({scores: newScore});

  render() {

    return (
      <div className="container">
        <Header />
        <Table players ={this.props.players} changeScore ={this._changeScores} scores = {this.state.scores} />
        <AddRound _addNewRow ={this._addNewRow} scores = {this.state.scores}/>
      </div>
    );
  }
}

export default SecondPage;