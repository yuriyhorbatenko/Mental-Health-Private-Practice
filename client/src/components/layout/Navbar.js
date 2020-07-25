import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import './Navbar.css';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>My Profile</span>
        </Link>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <>
      <div className='login'>
        <a className='login-link ' id='home-link' href='/login'>
          Login
        </a>
      </div>
    </>
  );

  return (
    <>
      <nav className='navbar'>
        <div className='name'>
          <a className='name-link effect-shine' href='/' id='home-link'>
            Ilona Menshova, LPC
          </a>
        </div>

        <div className='menu'>
          <div className='menu'>
            <ul>
              <li>
                <a className='effect-box' href='/about'>
                  About Me
                </a>
              </li>
              <li>
                <a className='effect-box' href='/services'>
                  Services
                </a>
              </li>
              <li>
                <a className='effect-box' href='/appointment'>
                  Schedule Appointment
                </a>
              </li>
              <li>
                <a className='effect-box' href='/links'>
                  Helpful Links
                </a>
              </li>
            </ul>
          </div>
        </div>

        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </>
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
