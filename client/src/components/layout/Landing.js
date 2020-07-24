import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Landing extends Component {
  render() {
    return (
      <>
        <Fade>
          <div id='HomeBody'>
            <div id='Home-Text'>
              <Zoom cascade>"Believe you can and you're halfway there."</Zoom>
              <span id='Home-Text2'>
                <Zoom cascade> Theodore Roosevelt</Zoom>
              </span>
            </div>
          </div>
        </Fade>
      </>
    );
  }
}

export default Landing;
