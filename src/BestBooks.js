import React from 'react';
import BookDisplay from './BookDisplay.js';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';

const server = "https://can-of-books-backend-mikevarun.herokuapp.com/books";
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false,
      newBookData: {
        title: '',
        description: '',
        status: ''
      }
    }
  }

  componentDidMount = () => {
    axios.get(server).then((response) => {
      this.setState({
        books: response.data
      });
    });
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      show: false,
      newBookData: {
        title: event.target.title.value,
        description: event.target.description.value,
        status: event.target.status.value
      },
      books: [...this.state.books, {
        title: event.target.title.value,
        description: event.target.description.value,
        status: event.target.status.value,
        _id: Math.random()
      }]
    });

    axios.post("https://can-of-books-backend-mikevarun.herokuapp.com/books", {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value
    });
  };

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <div className="book-grid">
          {this.state.books.length ? (
            this.state.books.map((book) => {
              return <BookDisplay
                key={book._id}
                title={book.title}
                description={book.description}
                status={book.status}
              />
            })
          ) : (
            <h3>No Books Found :( </h3>

          )}
        </div>
        <Button variant="primary" onClick={this.handleShow}>
          Add book
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a book</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.handleSubmit}>
            <Modal.Body>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    )
  }
}

export default BestBooks;