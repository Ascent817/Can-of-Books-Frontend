import React from 'react';
import './styles.css';

class BookDisplay extends React.Component {
  render() {
    return (
      <div className="book-display">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>{this.props.status}</p>
      </div>
    )
  }
}

export default BookDisplay;