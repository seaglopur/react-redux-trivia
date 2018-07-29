import React, { Component } from 'react';
import './App.css';
import PageNav from './components/pagenav/pagenav';
import Header from './components/header/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PageNav/>
      </div>
    );
  }
}

export default App;
