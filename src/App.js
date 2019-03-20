import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <Headline></Headline>
        </div>
      </div>
    );
  }
}

export default App;
