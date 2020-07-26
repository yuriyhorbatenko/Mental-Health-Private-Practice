import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import BookingItem from '../bookings/BookingItem';
import { getBooking } from '../../actions/booking';

const Booking = ({ getBooking, booking: { booking, loading }, match }) => {
  useEffect(() => {
    getBooking(match.params.id);
  }, [getBooking, match.params.id]);

  return loading || booking === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <BookingItem booking={booking} showActions={false} />
    </Fragment>
  );
};

Booking.propTypes = {
  getBooking: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  booking: state.booking,
});

export default connect(mapStateToProps, { getBooking })(Booking);
