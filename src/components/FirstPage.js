import React, { Component } from 'react';
import Form from './Form';
import Header from './HeaderFirstPage';

class FirstPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />      
        <Form startPlaying={ this.props.startPlaying }/>
      </div>
    );
  }
}

export default FirstPage;