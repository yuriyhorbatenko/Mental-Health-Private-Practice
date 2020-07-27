import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Fade from 'react-reveal/Fade';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, lastName, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, lastName, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <Fade>
        <div id='RegisterBody'>
          <Fade top>
            <div className='RegisterForm'>
              <Form onSubmit={onSubmit}>
                <Form.Group controlId='FirstName'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name='name'
                    value={name}
                    onChange={onChange}
                    type='text'
                    placeholder='First name'
                    required
                  />
                </Form.Group>

                <Form.Group controlId='LastName'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name='lastName'
                    value={lastName}
                    onChange={onChange}
                    type='text'
                    placeholder='Last name'
                    required
                  />
                </Form.Group>

                <Form.Group controlId='Email'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name='email'
                    value={email}
                    onChange={onChange}
                    type='email'
                    placeholder='Enter email'
                    required
                  />
                </Form.Group>

                <Form.Group controlId='Password1'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name='password'
                    value={password}
                    onChange={onChange}
                    type='password'
                    placeholder='Password'
                    required
                  />
                </Form.Group>

                <Form.Group controlId='Password2'>
                  <Form.Label>Re-Password</Form.Label>
                  <Form.Control
                    name='password2'
                    value={password2}
                    onChange={onChange}
                    type='password'
                    placeholder='Password'
                    required
                  />
                </Form.Group>

                <Button name='submit' variant='dark' type='submit'>Submit</Button>
                <Link to='/'><Button variant='outline-danger'>Go Back</Button></Link>

              </Form>
            </div>
          </Fade>
        </div>
      </Fade>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
