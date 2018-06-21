import React, { Component } from 'react';

class Form extends Component {
    state = {
        playerNames: ["","","",""]
    };
    
    _changePage = () => {
        this.props.startPlaying(this.state.playerNames);
    };

    _onNameChange = (id, text) => {
        let newPlayerNames = [...this.state.playerNames];
        newPlayerNames[id] = text;
        this.setState({
            playerNames: newPlayerNames
        });
    };
    // value={this.state.playerNames[0]}
    render() {
        return (
            <form onSubmit={this._changePage}>
                <div className="form-group">
                    <input type="text" className="form-control" id="player1" onChange={(event) => this._onNameChange(0, event.target.value)}   placeholder="Player 1..."/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="player2" onChange={(event) => this._onNameChange(1, event.target.value)}  placeholder="Player 2..." />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="player3" onChange={(event) => this._onNameChange(2, event.target.value)}  placeholder="Player 3..." />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="player4" onChange={(event) => this._onNameChange(3, event.target.value)} placeholder="Player 4..." />
                </div>
                <button type="submit" className="btn btn-primary">CREATE NEW GAME</button>
            </form>
        );
    }
}

export default Form;