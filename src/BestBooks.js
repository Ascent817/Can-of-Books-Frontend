import React from 'react';
import BookDisplay from './BookDisplay.js';
import axios from 'axios';
import { Button } from 'react-bootstrap';

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

  deleteBook = async (id) => {
    try {
      let url = `${server}/${id}`;
      await axios.delete(url);
      this.setState({
        books: this.state.books.filter(book => book._id !== id)
      });
    } catch (error) {
      alert("The delete request was malformed. Please try again later.");
    }
  };

  updateBook = async (event) => {
    event.preventDefault();
    let book = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      _id: event.target._id.value
    };

    try {
      let url = `${server}/${book._id}`;
      let updatedBook = await axios.put(url, book);
      let updatedBooks = this.state.books.map(currentBook => {
        return currentBook._id === book._id ? updatedBook.data : currentBook
      });
      this.setState({ books: updatedBooks });
    } catch (error) {
      alert("Malformed update request. Please try again later.");
    }
  };

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <div className="book-grid">
          {this.state.books.length ? (
            this.state.books.map((book) => {
              return <BookDisplay
                id={book._id}
                key={book._id}
                title={book.title}
                description={book.description}
                status={book.status}
                deleteBook={this.deleteBook}
                updateBook={this.updateBook}
              />
            })
          ) : (
            <h3>No Books Found :( </h3>

          )}
        </div>
        <Button variant="primary" onClick={this.handleShow}>
          Add book
        </Button>
      </>
    )
  }
}

export default BestBooks;