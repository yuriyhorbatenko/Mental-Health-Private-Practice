import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBooking } from '../../actions/booking';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Fade from 'react-reveal/Fade';

const BookingForm = ({ addBooking }) => {
  // const [text, setText] = useState('');
  const [formData, setFormData] = useState({
    appointmentDate: '',
    appointmentTime: '',
    text: '',
  });

  const { appointmentDate, appointmentTime, text } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    addBooking({ appointmentDate, appointmentTime, text });
  };

  return (
    <>
      <Fade>
        <div className='Booking-form'>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId='appointmentDate'>
              <Form.Label>Appointment Date</Form.Label>
              <Form.Control
                name='appointmentDate'
                value={appointmentDate}
                placeholder='07/25/2020'
                onChange={onChange}
                type='text'
                required
              />
            </Form.Group>

            <Form.Group controlId='appointmentTime'>
              <Form.Label>Appointment Time</Form.Label>
              <Form.Control
                name='appointmentTime'
                value={appointmentTime}
                placeholder='5pm'
                onChange={onChange}
                type='text'
                required
              />
            </Form.Group>
            <Form.Group controlId='text'>
              <Form.Label>Comments</Form.Label>
              <Form.Control
                name='text'
                value={text}
                placeholder='Id like to discuss xyz'
                onChange={onChange}
                type='text'
                required
              />
            </Form.Group>
            <Button name='submit' variant='dark' type='submit' value='Submit'>
              Submit
            </Button>
          </Form>
        </div>
      </Fade>
    </>
  );
};

BookingForm.propTypes = {
  addBooking: PropTypes.func.isRequired,
};

export default connect(null, { addBooking })(BookingForm);
