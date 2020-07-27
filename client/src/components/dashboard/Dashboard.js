import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { getBookings } from '../../actions/booking';
import Bookings from '../bookings/Bookings';
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import moment from 'moment';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile },
  getBookings,
  booking: { bookings },
}) => {
  useEffect(
    () => {
      getCurrentProfile();
      getBookings();
    },
    [getCurrentProfile],
    [getBookings]
  );

  return (
    <Fragment>
      <Fade>
        <div className='Dashboard-Body'>
          <Fade top>
            <div className='Dashboard-Form'>
              <p className='Welcome-User'>
                <i className='fas fa-user' /> Welcome&nbsp;
                <span className='dbInfo'>{user && user.name}</span>
              </p>

              <div className='Account-and-Profile'>
                <div className='Account-information'>
                  <h2 className='dbHeader'>Account information</h2>
                  <p>
                    <i className='fas' />
                    First Name:{' '}
                    <span className='dbInfo'>{user && user.name}</span>
                  </p>
                  <p>
                    <i className='fas' />
                    Last Name:{' '}
                    <span className='dbInfo'>{user && user.lastName}</span>
                  </p>
                  <p>
                    <i className='fas' />
                    Email: <span className='dbInfo'>{user && user.email}</span>
                  </p>
                  <Button
                    variant='danger dash-button'
                    onClick={() => deleteAccount()}
                  >
                    <i className='fas fa-user-minus' /> Delete My Account{' '}
                  </Button>
                </div>

                {profile !== null ? (
                  <Fragment>
                    <div className='Profile-information'>
                      <h2 className='dbHeader'>Profile information</h2>
                      <p>
                        <i className='profdash' />
                        Phone Number:{' '}
                        <span className='dbInfo'>
                          {profile && profile.phone}
                        </span>
                      </p>
                      <p>
                        <i className='profdash' />
                        Date Of Birth:{' '}
                        <span className='dbInfo'>
                          {profile && (
                            <Moment format='MMM-D-YYYY'>
                              {moment.utc(profile.dob)}
                            </Moment>
                          )}
                        </span>
                      </p>
                      <p>
                        <i className='profdash' />
                        Address:{' '}
                        <span className='dbInfo'>
                          {profile && profile.address1}{' '}
                          {profile && profile.address2}
                        </span>
                      </p>
                      <p>
                        <i className='profdash' />
                        City:{' '}
                        <span className='dbInfo'>
                          {profile && profile.city}
                        </span>
                      </p>
                      <p>
                        <i className='profdash' />
                        State:{' '}
                        <span className='dbInfo'>
                          {profile && profile.statee}
                        </span>
                      </p>
                      <p>
                        <i className='profdash' />
                        Zip Code:{' '}
                        <span className='dbInfo'>{profile && profile.zip}</span>
                      </p>

                      <Link to='/edit-profile'>
                        <Button variant='success' className='dash-button'>
                          <i className='fas fa-user-circle text-primary' /> Edit
                          Profile
                        </Button>
                      </Link>
                    </div>
                  </Fragment>
                ) : (
                  <Fragment>
                    <div className='Profile-information'>
                      <h2 className='dbHeader'>Profile information</h2>
                      <p>
                        You have not yet setup a profile, please add some info
                      </p>
                      <Link to='/create-profile'>
                        <Button variant='success dash-button'>
                          Create Profile
                        </Button>
                      </Link>
                    </div>
                  </Fragment>
                )}
              </div>

              {bookings !== null ? (
                <Fragment>
                  <div className='Booking-information'>
                    <h2 className='dbHeaderRight'>Booking information</h2>
                    <Bookings />
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className='Booking-information'>
                    <p>You have not have any Appointments, please set one</p>
                    <Link to='/appointment'>
                      <Button variant='success'>Create Appointment</Button>
                    </Link>
                  </div>
                </Fragment>
              )}
            </div>
          </Fade>
        </div>
      </Fade>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getBookings: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  booking: state.booking,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount,
  getBookings,
})(Dashboard);
