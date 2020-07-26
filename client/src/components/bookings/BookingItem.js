import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBooking } from '../../actions/booking';

const BookingItem = ({
  deleteBooking,
  auth,
  booking: { _id, text, appointmentDate, appointmentTime, user },
  showActions,
}) => (

  <Fragment>
    <div className='booking bg-white p-1 my-1'>
      {showActions && !_id ? (
        <p>no Bookings</p>
      ) : (
        <>
          {!auth.loading && user === auth.user._id && (
            <>
              <p className='my-1'>Appointment Date: {appointmentDate}</p>
              <p className='my-1'>Appointment Time: {appointmentTime}</p>
              <p className='my-1'>Comments: {text}</p>
              <button
                onClick={() => deleteBooking(_id)}
                type='button'
                className='btn btn-danger'
              >
                <i className='fas fa-times' />
              </button>
            </>
          )}
        </>
      )}
    </div>
  </Fragment>
);

BookingItem.defaultProps = {
  showActions: true,
};

BookingItem.propTypes = {
  booking: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteBooking: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteBooking })(BookingItem);
