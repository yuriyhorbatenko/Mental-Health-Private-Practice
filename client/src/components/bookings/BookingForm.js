import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBooking } from '../../actions/booking';

const BookingForm = ({ addBooking }) => {
  const [text, setText] = useState('');

  return (
    <div className='Booking-form'>
      <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={(e) => {
          e.preventDefault();
          addBooking({ text });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a Booking'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>


  );
};

BookingForm.propTypes = {
  addBooking: PropTypes.func.isRequired,
};

export default connect(null, { addBooking })(BookingForm);
