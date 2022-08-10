import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export class UpdateBookModal extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateBook(event);
    this.props.handleClose();
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a book</Modal.Title>
        </Modal.Header>
        <Form onSubmit={this.handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control defaultValue={this.props.book.title} type="text" />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control defaultValue={this.props.book.description} type="text" />
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control defaultValue={this.props.book.status} type="text" />
            </Form.Group>
            <Form.Group controlId="_id">
              <Form.Label>ID</Form.Label>
              <Form.Control disabled defaultValue={this.props.book._id} type="text" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default UpdateBookModal;