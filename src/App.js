import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Pdf from './components/pdf/pdf'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      pdfUrl:'./h5.pdf'
    }
  }

  componentDidMount () {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Pdf />

      </div>
    );
  }
}

export default App;
