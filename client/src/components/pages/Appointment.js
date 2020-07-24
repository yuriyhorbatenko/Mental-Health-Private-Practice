import React, { Fragment, Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import BookingForm from './../bookings/BookingForm';

class Appointment extends Component {
  render() {
    return (
      <>
        <Fade>
          <div id='AppointmentBody'>
            <Zoom cascade>
              <div id='Body-Text'>Schedule Appointment</div>
            </Zoom>
          </div>
          <div id='Divider'></div>
          <div className='Appointment-body'>
            <Fragment>
              <BookingForm />
            </Fragment>
          </div>
        </Fade>
      </>
    );
  }
}

export default Appointment;
