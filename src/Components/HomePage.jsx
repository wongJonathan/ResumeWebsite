import React, { Component } from 'react';
import { Button, ButtonToolbar, Grid, Row, Col, Image, Glyphicon } from 'react-bootstrap';
import './HomePage.css';
import meImage from '../images/headshot.jpg';

class HomePage extends Component {
  render() {
    return (
        <Grid className="container" fluid>
            <Row className="row">
                <Col xs={4} className="about">
                    <h1>About Me:</h1>
                    <p>Hi! My name is Jonathan Wong, I'm a computer science student at Rochester Institute of Technology.
                        While I'm not working on school work or other personal projects I'm at the gym or rock climbing.</p> 
                </Col>
                <Col xs={4} className="propic">
                    <Image src={meImage } className="profilePic" responsive circle/>
                </Col>

                <Col xs={4}  className="details">
                    <h1>Details:</h1>
                    <p><Glyphicon glyph="envelope"/> Email: jrw9661@rit.edu</p>
                    <p><Glyphicon glyph="phone"/> Phone: 973 525 3889</p>
                    <p><Glyphicon glyph="console"/> GitHub: https://github.com/wongJonathan</p>
                </Col>
            </Row>
        </Grid>

    )
  }
}
export default HomePage;