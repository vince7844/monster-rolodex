import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    pseudo: this.props.match.params.pseudo
  }

  render() {
    return (
      <h1>Salut {this.state.pseudo} !</h1>
    );
  }
}

export default App;
