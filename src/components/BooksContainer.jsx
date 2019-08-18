import React from 'react';
import Book from './Book';

class BooksContainer extends React.PureComponent {
  render() {
    const { books } = this.props;

    console.log(books, books.map);

    const bookRows = books.map((book, index) => (
      <Book
        title={book.title}
        author={book.author}
        year={book.year}
        status={book.status}
        key={`book-${index}`}
      />
    ));

    return (
      <section className="books-container">
        <div className="books-header">
          <div>Title</div>
          <div>Author</div>
          <div>Year</div>
          <div>Status</div>
          <div />
        </div>
        <div className="books-list">
          {bookRows}
        </div>
      </section>
    );
  }
}

export default BooksContainer;
