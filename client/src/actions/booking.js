import api from '../utils/api';
import { setAlert } from './alert';
import {
  GET_BOOKINGS,
  BOOKING_ERROR,
  DELETE_BOOKING,
  ADD_BOOKING,
  GET_BOOKING,
} from './types';

// Get bookings
export const getBookings = () => async (dispatch) => {
  try {
    const res = await api.get('/bookings');

    dispatch({
      type: GET_BOOKINGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BOOKING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete booking
export const deleteBooking = (id) => async (dispatch) => {
  try {
    await api.delete(`/bookings/${id}`);

    dispatch({
      type: DELETE_BOOKING,
      payload: id,
    });

    dispatch(setAlert('Booking Removed', 'success'));
  } catch (err) {
    dispatch({
      type: BOOKING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add booking
export const addBooking = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/bookings', formData);

    dispatch({
      type: ADD_BOOKING,
      payload: res.data,
    });

    dispatch(setAlert('Booking Created', 'success'));
  } catch (err) {
    dispatch({
      type: BOOKING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get booking
export const getBooking = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/bookings/${id}`);

    dispatch({
      type: GET_BOOKING,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BOOKING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
