import React from 'react'
import {Modal,Button,Form} from 'react-bootstrap'

const signupModal = ({show,onHide}) => {
    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            회원가입
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicusername">
    <Form.Label>username</Form.Label>
    <Form.Control type="text" placeholder="text" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
</Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" type="submit">
    Submit
  </Button>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default signupModal
