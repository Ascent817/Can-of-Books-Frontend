import React from 'react';
import { Button } from 'react-bootstrap';
import UpdateBookModal from './UpdateBookModal.js';
import './styles.css';

class BookDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleShow = () => {
    this.setState({
      show: true
    });
  };

  render() {
    return (
      <div className="book-display">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>{this.props.status}</p>
        <Button variant="danger" onClick={() => this.props.deleteBook(this.props.id)}>Delete</Button>{' '}
        <Button variant="warning" onClick={this.handleShow}>Update</Button>
        <UpdateBookModal show={this.state.show} handleClose={this.handleClose} handleSubmit={this.handleSubmit}></UpdateBookModal>
      </div>
    )
  }
}

export default BookDisplay;