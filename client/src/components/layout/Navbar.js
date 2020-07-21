import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import './Navbar.css';
// import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      {/* <li>
        <Link to='/profiles'>Developers</Link>
      </li> */}
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Profile...dash</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <>
      <div className='menu'>
        <ol>
          <li>
            <Link to='/about'>About Me</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/appointment'>Schedule Appointment</Link>
          </li>
          <li>
            <Link to='/links'>Helpful Links</Link>
          </li>
        </ol>
      </div>
      <ul>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>Ilona Menshova, LPC</Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
