import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <h2 className='large text-primary'>User Dashboard</h2>
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

          <h2>Booking information</h2>

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
