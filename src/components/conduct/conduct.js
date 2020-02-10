import React, { Component } from 'react';
import { render } from 'react-dom';
// import { Document, Page } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

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
                  file="./../../../Code_of_conduct.pdf"
                  onLoadSuccess={this.state.onDocumentLoadSuccess}
                >
                    <Page pageNumber={this.state.pageNumber} width={600}/>
                </Document>
            </div>
        );
    }
}

export default Conduct;