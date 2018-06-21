import React, {Component} from 'react';
import _ from 'lodash';

class Table extends Component {
	_onScoreChange = (value, col, row) => {
		let newScore = this.props.scores;
		newScore[row][col]  = _.toInteger(value);
		this.props.changeScore(newScore);
	};

	getUserTotalScore = (userIndex) => {
		let playerScores = this.props.scores.map((score) => score[userIndex]);
		return playerScores.reduce((a, b) => a + b, 0);
	};

	render() {
		const allPlayers = this.props.players.map((playerName, index) => (
			<th key={index}>{playerName}</th>
		));

		let player1TotalScore = this.getUserTotalScore(0);
		let player2TotalScore = this.getUserTotalScore(1);
		let player3TotalScore = this.getUserTotalScore(2);
		let player4TotalScore = this.getUserTotalScore(3);

		let totalScore = player1TotalScore + player2TotalScore + player3TotalScore + player4TotalScore;

		const allScores = this.props.scores.map((score, index) => (
			<tr key={index} className={score.reduce((a, b) => a + b) ? "inValid" : ''}>
				<td>Round {index + 1}</td>
				<td><input type="number" value={score[0]} data-col="0" data-row={index}
				           onInput={(event) => this._onScoreChange(event.target.value, 0 , index)}/></td>
				<td><input type="number" value={score[1]} data-col="1" data-row={index}
				           onInput={(event) => this._onScoreChange(event.target.value, 1 , index)}/></td>
				<td><input type="number" value={score[2]} data-col="2" data-row={index}
				           onInput={(event) => this._onScoreChange(event.target.value, 2 , index)}/></td>
				<td><input type="number" value={score[3]} data-col="3" data-row={index}
				           onInput={(event) => this._onScoreChange(event.target.value, 3 , index)}/></td>
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
					<td>Sum Of Score({totalScore})</td>
					<td>{player1TotalScore}</td>
					<td>{player2TotalScore}</td>
					<td>{player3TotalScore}</td>
					<td>{player4TotalScore}</td>
				</tr>
				{allScores}
				</tbody>


			</table>
		);
	}
}

export default Table;