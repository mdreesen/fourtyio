import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';

export function UserLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Modal Body (username, email, password, and button) */}
          <div className='modal-body' type='text'>
            <form>
              <div>
                <label id='signupEmailLabel' htmlFor='signup-username'>
                  Email
                </label>
                <div>
                  <input
                    id='signup-email-input'
                    name='email'
                    placeholder='Required'
                  />
                </div>
              </div>
              <div>
                <label id='signupPasswordLabel' htmlFor='signup-password'>
                  Password (minimum of 4 characters)
                </label>
                <div>
                  <input
                    id='signup-password-input'
                    type='password'
                    name='password'
                    placeholder='Required'
                    autoComplete='on'
                  />
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
