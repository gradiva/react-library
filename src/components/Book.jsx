import React from 'react';
import Button from './Button';

class Book extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onRemoveBookById = this.onRemoveBookById.bind(this);
  }

  onRemoveBookById() {
    const { removeBookById, book } = this.props;
    removeBookById(book.id);
  }

  render() {
    const { book } = this.props;
    const { title, author, year, status } = book;

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
        <Button onClick={this.onRemoveBookById} value="Delete" />
      </div>
    );
  }
}

export default Book;
