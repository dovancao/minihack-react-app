import React, { Component } from 'react';

class AddRound extends Component {

  _addRow = () => {
      let newScore = this.props.scores;
      newScore.push([0,0,0,0]);
      this.props._addNewRow(newScore);
    }
  render() {

    return (
        <div className="text-center" onClick={this._addRow}>
            <button className="btn btn-danger" id="add_round">ADD ROUND</button>
        </div>
    
    );
  }
}

export default AddRound;