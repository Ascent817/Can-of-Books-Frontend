import React from 'react';
import BookDisplay from './BookDisplay.js';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount = () => {
    axios.get("http://localhost:3032/books").then((response) => {
      this.setState({
        books: response.data
      });
    });
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
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;