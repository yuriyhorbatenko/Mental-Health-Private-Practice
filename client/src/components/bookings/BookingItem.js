import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBooking } from '../../actions/booking';

const BookingItem = ({
  deleteBooking,
  auth,
  booking: { _id, text, name, user },
  showActions,
}) => (
  <div className='booking bg-white p-1 my-1'>
    <div>
      {showActions && (
        <Fragment>
          {!auth.loading && user === auth.user._id && (
            <>
              <p className='my-1'>{text}</p>
              <button
                onClick={() => deleteBooking(_id)}
                type='button'
                className='btn btn-danger'
              >
                <i className='fas fa-times' />
              </button>
            </>
          )}
        </Fragment>
      )}
    </div>
  </div>
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
