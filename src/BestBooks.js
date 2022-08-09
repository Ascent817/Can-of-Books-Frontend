import React from 'react';
import BookDisplay from './BookDisplay.js';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false
    }
  }

  componentDidMount = () => {
    axios.get("https://can-of-books-backend-mikevarun.herokuapp.com/books").then((response) => {
      this.setState({
        books: response.data
      });
    });
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }
  handleShow = () => {
    this.setState({
      show: true
    })
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          this.state.books.map((book) => {
            return <BookDisplay key={book._id} title={book.title} description={book.description} status={book.status} />
          })
        ) : (
          <h3>No Books Found :( </h3>

        )}
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default BestBooks;