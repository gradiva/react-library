import React from 'react';
import PropTypes from 'prop-types';
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
        <div className="title title-text">{title}</div>
        <div className="author book-info">{author}</div>
        <div className="year book-info">{year}</div>
        <div className="status">{status}</div>
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

Book.propTypes = {
  book: PropTypes.object.isRequired,
  removeBookById: PropTypes.func.isRequired,
};

export default Book;
