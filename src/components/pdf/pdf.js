import React, { Component } from 'react';
// import *as MyPdfViewer from './components/pdf/pdf'
import PDF from 'react-pdf-js'
// import { Document } from 'react-pdf'
// import myPDF from './h5.pdf'

export default class Pdf extends Component {

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
      <div className="pdf">

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
