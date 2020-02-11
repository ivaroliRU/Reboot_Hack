import React, { Component } from 'react';
import { render } from 'react-dom';
// import { Document, Page } from 'react-pdf';
import { Document, Page, pdfjs } from 'react-pdf/dist/entry.webpack';

// Not sure what it does, but stack overflow recommends it ¯\_(ツ)_/¯
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Conduct extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            numPages: null,
            pageNumber: 1,
        };
        

        // this.numPages = this.numPages.bind(this);
    
    this.state.onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    }

    render() {
        const { pageNumber, numPages } = this.state;
        
        return (
            <div>
                <Document
                  file="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                  onLoadSuccess={this.state.onDocumentLoadSuccess}
                  onLoadError={console.error}
                >
                    <Page pageNumber={this.state.pageNumber} width={600}/>
                </Document>
            </div>
        );
    }
}

export default Conduct;