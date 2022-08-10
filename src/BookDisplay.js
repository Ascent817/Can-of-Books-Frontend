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
    let { title, description, status, id } = this.props;
    let book = {
      title: title,
      description: description,
      status: status,
      _id: id
    };

    return (
      <div className="book-display">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{status}</p>
        <Button variant="danger" onClick={() => this.props.deleteBook(id)}>Delete</Button>{' '}
        <Button variant="warning" onClick={this.handleShow}>Update</Button>
        <UpdateBookModal show={this.state.show} book={book} updateBook={this.props.updateBook} handleClose={this.handleClose} />
      </div>
    )
  }
}

export default BookDisplay;