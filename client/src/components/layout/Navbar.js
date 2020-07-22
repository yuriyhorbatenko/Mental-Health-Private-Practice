import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import './Navbar.css';

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
    </>
  );

  return (
    <>
      <nav className='navbar'>
        <div className='name'>
          <a className='name-link' href='/' id='home-link'>
            Ilona Menshova, LPC<span className='sr-only'>(current)</span>
          </a>
        </div>

        <div className='menu'>
          <div className='menu'>
            <ul>
              <li>
                <a href='/about'>About Me</a>
              </li>
              <li>
                <a href='/services'>Services</a>
              </li>
              <li>
                <a href='/appointment'>Schedule Appointment</a>
              </li>
              <li>
                <a href='/links'>Helpful Links</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='login'>
          <a className='login-link' id='home-link' href='/login'>Login</a>
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
