import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Fade from 'react-reveal/Fade';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile },
  // booking: { booking }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

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
                  <i className='profdash' /> Address: {profile && profile.address}
                </p>
                <p>
                  <i className='profdash' /> Payment: {profile && profile.payment}
                </p>



                <DashboardActions />
                <div className='my-2'>
                  <button className='btn btn-danger' onClick={() => deleteAccount()}>
                    <i className='fas fa-user-minus' /> Delete My Account
            </button>
                </div>

              </Fragment>

            ) : (
                <Fragment>
                  <p>You have not yet setup a profile, please add some info</p>
                  <Link to='/create-profile' className='btn btn-primary my-1'>
                    Create Profile
                  </Link>
                </Fragment>
              )}
            {/* {booking !== null ? (
              <Fragment>
                <h2>Booking information</h2>
              </Fragment>
            ) : (
                <Fragment>
                  <p>You have not yet scheduled an appointment</p>
                  <Link to='/bookings' className='btn btn-primary'> Schedule </Link>
                </Fragment>
              )} */}
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
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
