import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import './Navbar.css';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

  const authLinks = (
    <>
      <div className="profile-menu">

        <div className='dashboard'>
          <Link to='/dashboard' className='effect-box2'>
            <i className='icon-nav fas fa-user' />{' '}
            <span className='hide-sm underline-opening'>My Profile</span>
          </Link>
        </div>

        <div className='logout'>
          <a onClick={logout} href='#!' className='effect-box2'>
            <i className='icon-nav fas fa-sign-out-alt' />{' '}
            <span className='hide-sm underline-opening'>Logout</span>
          </a>
        </div>

      </div>
    </>
  );

  const guestLinks = (
    <>
      <div className='login'>
        <Link to='/login'>
          <i className='login-link' /> <span className='hide-sm effect-box2'>Login</span>
        </Link>
      </div>
    </>
  );

  return (
    <>
      <nav className='navbar'>
        <div className='name'>
          <Link to='/'>
            <div id='home-link' className='name-link'>Ilona Menshova, LPC</div>
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
