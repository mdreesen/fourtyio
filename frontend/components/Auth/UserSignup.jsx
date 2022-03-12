import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function UserSignup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Modal Body (username, email, password, and button) */}
          <div className="modal-body" type="text">
            <form>
              <div>
                <label id="signupUsernameLabel" htmlFor="signup-username">
                  Username
                </label>
                <div>
                  <input
                    id="signup-username-input"
                    name="username"
                    placeholder="Required"
                  />
                </div>
              </div>
              <br />
              <div>
                <label id="signupFirstNameLabel" htmlFor="signup-firstName">
                  First Name
                </label>
                <div>
                  <input
                    id="signup-firstname-input"
                    name="firstname"
                    placeholder="Required"
                  />
                </div>
              </div>
              <br />
              <div>
                <label id="signupLastNameLabel" htmlFor="signup-lastName">
                  Last Name
                </label>
                <div>
                  <input
                    id="signup-lastname-input"
                    name="lastname"
                    placeholder="Required"
                  />
                </div>
              </div>
              <br />
              <div>
                <label id="signupEmailLabel" htmlFor="signup-email">
                  Email
                </label>
                <div>
                  <input
                    id="signup-email-input"
                    name="email"
                    placeholder="Required"
                  />
                </div>
              </div>
              <br />
              <div>
                <label id="signupPasswordLabel" htmlFor="signup-password">
                  Password (minimum of 4 characters)
                </label>
                <div>
                  <input
                    id="signup-password-input"
                    type="password"
                    name="password"
                    placeholder="Required"
                    autoComplete="on"
                  />
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
