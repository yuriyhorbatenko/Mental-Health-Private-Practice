import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBooking } from '../../actions/booking';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

const BookingItem = ({
  deleteBooking,
  auth,
  booking: {
    _id,
    text,
    appointmentDate,
    appointmentTime,
    appointmentDuration,
    user,
  },
  showActions,
}) => (
  <>
    {showActions && (
      <Fragment>
        {!auth.loading && user === auth.user._id && (
          <>
            <p>
              <i className='profdash' />
              Appointment Date:{' '}
              <span className='dbInfo'>
                <Moment format='MMM-D-YYYY'>
                  {moment.utc(appointmentDate)}
                </Moment>
              </span>
            </p>

            <p>
              <i className='profdash' />
              Appointment Time:{' '}
              <span className='dbInfo'>{appointmentTime}</span>
            </p>

            <p>
              <i className='profdash' />
              Appointment Duration:{' '}
              <span className='dbInfo'>{appointmentDuration}</span>
            </p>

            <p>
              <i className='profdash' />
              Comment: <span className='dbInfo'>{text}</span>
            </p>

            <Button
              variant='outline-danger'
              id='dash-button2'
              onClick={() => deleteBooking(_id)}
            >
              <i className='fas fa-trash' /> Delete Booking{' '}
            </Button>
          </>
        )}
      </Fragment>
    )}
  </>
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
