import React from 'react';
import Button from './Button';

class Book extends React.PureComponent {
  render() {
    const { title, author, year, status } = this.props;

    return (
      <div className="book">
        <div>{title}</div>
        <div>{author}</div>
        <div>{year}</div>
        <div>{status}</div>
        <div>
          <input type="checkbox" />
          {' '}
          Read/Not Yet
        </div>
        <Button />
      </div>
    );
  }
}

export default Book;
