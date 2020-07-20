import React from 'react';
import './Navbar.css';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='name'>
          <a className='name-link' href='/' id='home-link'>
            Ilona Menshova, LPC<span className='sr-only'>(current)</span>
          </a>
        </div>

        <div className='menu'>
          <div className='menu'>
            <ul>
              <li>
                <a href='/about'>About Me</a>
              </li>
              <li>
                <a href='/services'>Services</a>
              </li>
              <li>
                <a href='/appointment'>Schedule Appointment</a>
              </li>
              <li>
                <a href='/links'>Helpful Links</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='login'>
          <a className='login-link' id='home-link' onClick={showModal}>
            Login
          </a>
        </div>
      </nav>

      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>

            <hr></hr>

            <Button variant='dark' type='submit'>
              Submit
            </Button>

            <Button variant='success' href="/register">
              Register
            </Button>

            <Button variant='outline-danger' onClick={hideModal}>
              Cancel
            </Button>


          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navbar;
