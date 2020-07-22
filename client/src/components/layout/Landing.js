import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <Fade>
        <div id="HomeBody">
          <div id="Home-Text"><Zoom cascade>"Believe you can and you're halfway there."</Zoom><span id="Home-Text2"><Zoom cascade>    Theodore Roosevelt</Zoom></span></div>
        </div>
      </Fade>
    </>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
