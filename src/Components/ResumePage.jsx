import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import Resume from '../images/Jonathan_Wong_Resume.pdf';
class ResumePage extends Component {
  render() {
    return (
        <Image src={Resume}/>
    );
  }
}
export default HomePage;