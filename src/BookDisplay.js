import React from 'react';

class BookDisplay extends React.Component {
  render() {
    return (
      <>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>{this.props.status}</p>
      </>
    )
  }
}

export default BookDisplay;