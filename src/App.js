import React, { Component } from 'react';
import logo from './logo.svg';
// import *as MyPdfViewer from './components/pdf/pdf'
import PDF from 'react-pdf-js'
// import { Document } from 'react-pdf'
// import myPDF from './h5.pdf'
import './App.css';

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

       {/* <PDF file={require('./h5.pdf')} onDocumentComplete={this.onDocumentComplete}
         onPageComplete={this.state.page} /> */}

         <div className="parentDivWhoseWidthAndHeightAreUsedToStretchThePdf">
          <PDF
            // file={myPDF}
            file={require('./h5.pdf')}
            fillWidth
            fillHeight // this will be ignored because fillWidth is also passed
          />
        </div>

        {/* <Document file={myPDF} /> */}

      </div>
    );
  }
}

export default App;
