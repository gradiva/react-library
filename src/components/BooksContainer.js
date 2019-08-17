import React from 'react';
import Book from './Book';

class BooksContainer extends React.Component {
  render() {
    const bookRows = [];

    this.props.books.forEach((book) => {
      bookRows.push(
        <Book
          title={book.title}
          author={book.author}
          year={book.year}
          status={book.status}
        />
      );
    });

    return (
      <section className="books-container">
        <div className="books-header">
          <div>Title</div>
          <div>Author</div>
          <div>Year</div>
          <div>Status</div>
          <div></div>
        </div>
        <div className="books-list">
          {bookRows}
        </div>
      </section>
    );
  }
}

export default BooksContainer;