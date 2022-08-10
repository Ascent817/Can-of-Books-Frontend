import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';

class BookDisplay extends React.Component {
  render() {
    return (
      <div className="book-display">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>{this.props.status}</p>
        <Button variant="danger" onClick={() => this.props.deleteBook(this.props.id)}>Delete</Button>{' '}
        <Button variant="warning" onClick={() => this.props.updateBook({
          title: this.props.title,
          description: this.props.description,
          status: this.props.status,
          _id: this.props.id
        })}>Update</Button>
      </div>
    )
  }
}

export default BookDisplay;