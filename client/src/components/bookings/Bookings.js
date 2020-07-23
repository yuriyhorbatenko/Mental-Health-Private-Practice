import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookingItem from './BookingItem';
import BookingForm from './BookingForm';
import { getBookings } from '../../actions/booking';

const Bookings = ({ getBookings, booking: { bookings } }) => {
  useEffect(() => {
    getBookings();
  }, [getBookings]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Bookings</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome to the community
      </p>
      <BookingForm />
      <div className='bookings'>
        {bookings.map((booking) => (
          <BookingItem key={booking._id} booking={booking} />
        ))}
      </div>
    </Fragment>
  );
};

Bookings.propTypes = {
  getBookings: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  booking: state.booking,
});

export default connect(mapStateToProps, { getBookings })(Bookings);
