import React, { Component } from 'react';
import { Button, ButtonToolbar, Grid, Row, Col, Image } from 'react-bootstrap';
import './HomePage.css';
import meImage from '../images/headshot.jpg';

class HomePage extends Component {
  render() {
    return (
        <Grid className="container">
            <Row className="row">
                <Col xs={6} className="col-sm">
                    <Image src={meImage } className="profilePic" circle/>
                </Col>

                <Col xs={6}  className="col-sm">
                    <h1 className="heading">
                        Jonathan Wong
                    </h1>
                    <h2>About</h2>
                </Col>
                
                <hr/>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
            </Row>
        </Grid>

    )
  }
}
export default HomePage;