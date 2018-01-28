import React, { Component } from 'react';
import { Image, Grid, Row, Col, Button } from 'react-bootstrap';
import { Document, Page} from 'react-pdf';

import Resume from '../images/Jonathan_Wong_Resume.pdf';
class ResumePage extends Component {

    state = {
        numPages: null,
        pageNumber: 1,
    }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    return (
        <Grid>
            <Row>
                <Col xs={6} xsOffset={3}>
                    <Document
                    file={Resume}
                    onLoadSuccess={this.onDocumentLoad}
                    >
                        <Page pageNumber={this.state.pageNumber} />
                    </Document>
                </Col>
            </Row>
            <Row>
                <Col xs={6} xsOffset={4}>
                    <Button bsStyle="info">Download Resume</Button>
                </Col>
            </Row>
        </Grid>
        
    );
  }
}
export default ResumePage;