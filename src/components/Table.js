import React, { Component } from 'react';

class Table extends Component {

    state = {
        scores: ['']
    }

  render() {
      const allPlayers = this.props.players.map((playerName, index) => (
        <th key={index}>{playerName}</th>
      ));

      const allScores = this.props.scores.map((score, index) => (
            <tr key={index}>
                <td>Round {index}</td>
                <td><input type="number" defaultValue="{score[0]}"/></td>
                <td><input type="number" defaultValue="{score[1]}"/></td>
                <td><input type="number" defaultValue="{score[2]}"/></td>
                <td><input type="number" defaultValue="{score[3]}"/></td>
            </tr>
        ));

    return (
    <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            {allPlayers}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sum Of Score</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {allScores}
        </tbody>

       
      </table>          
    );
  }
}

export default Table;