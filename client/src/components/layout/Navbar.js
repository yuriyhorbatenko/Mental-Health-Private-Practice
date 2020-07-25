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
    <div className='login'>
      <Link to='/login'>
        <i className='login-link' /> <span className='hide-sm'>Login</span>
      </Link>
    </div>
  );

  return (
    <>
      <nav className='navbar'>
        <div className='name'>
          <Link to='/'>
            <i id='home-link' className='name-link effect-shine' /> Ilona
            Menshova, LPC
          </Link>
        </div>

        <div className='menu'>
          <div className='menu'>
            <ul>
              <li>
                <Link className='effect-box' to='/about'>
                  About Me
                </Link>
              </li>
              <li>
                <Link className='effect-box' to='/services'>
                  Services
                </Link>
              </li>
              <li>
                <Link className='effect-box' to='/appointment'>
                  Schedule Appointment
                </Link>
              </li>
              <li>
                <Link className='effect-box' to='/links'>
                  Helpful Links
                </Link>
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
