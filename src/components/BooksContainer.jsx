import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import '../css/book.css';

class BooksContainer extends React.PureComponent {
  render() {
    const { books, removeBookById } = this.props;

    const bookItems = books.map((book) => (
      <Book
        book={book}
        removeBookById={removeBookById}
        key={`book-${book.id}`}
      />
    ));

    return (
      <section className="books-container">
        <div className="books-header">
          {/* <div>Title</div>
          <div>Author</div>
          <div>Year</div>
          <div>Status</div>
          <div /> */}
        </div>
        <div className="books-list">
          {bookItems}
        </div>
      </section>
    );
  }
}

BooksContainer.propTypes = {
  books: PropTypes.array.isRequired,
  removeBookById: PropTypes.func.isRequired,
};

export default BooksContainer;
