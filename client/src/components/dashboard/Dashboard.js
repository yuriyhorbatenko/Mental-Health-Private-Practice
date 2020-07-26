import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { getBookings } from '../../actions/booking';
import BookingItem from '../bookings/BookingItem';
import Fade from 'react-reveal/Fade';

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
        <div className='x'>
          <div className='z'>
            <h1 className='dbhead'>User Dashboard</h1>
            <p className='lead'>
              <i className='fas fa-user' /> Welcome {user && user.name}
            </p>
            <h2>Account information</h2>
            <p>
              <i className='fas' /> First Name: {user && user.name}
            </p>
            <p>
              <i className='fas' /> Last Name: {user && user.lastName}
            </p>
            <p>
              <i className='fas' /> Email: {user && user.email}
            </p>
            {profile !== null ? (
              <Fragment>
                <h2>Profile information</h2>
                <p>
                  <i className='profdash' /> DOB: {profile && profile.dob}
                </p>
                <p>
                  <i className='profdash' /> Address:{' '}
                  {profile && profile.address1}
                </p>
                <p>
                  <i className='profdash' /> Phone Number:{' '}
                  {profile && profile.number}
                </p>

                <DashboardActions />
              </Fragment>
            ) : (
              <Fragment>
                <p>You have not yet setup a profile, please add some info</p>
                <Link to='/create-profile' className='btn btn-primary my-1'>
                  Create Profile
                </Link>
              </Fragment>
            )}

            {bookings !== null ? (
              <Fragment>
                <h2>Booking information</h2>
                <p>
                  <i className='profdash' /> Bookings:{' '}
                  {bookings && bookings.text}
                </p>
                <div className='bookings'>
                  {bookings.map((booking) => (
                    <BookingItem key={booking._id} booking={booking} />
                  ))}
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <p>You have not have any Appointments, please set one</p>
                <Link to='/appointment' className='btn btn-primary my-1'>
                  Create Appointment
                </Link>
              </Fragment>
            )}
            <div className='my-2'>
              <button
                className='btn btn-danger'
                onClick={() => deleteAccount()}
              >
                <i className='fas fa-user-minus' /> Delete My Account
              </button>
            </div>
          </div>
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
