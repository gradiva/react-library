import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import SlideCheckbox from './SlideCheckbox';

class Book extends React.PureComponent {
  constructor(props) {
    super(props);

    this.removeBook = this.removeBook.bind(this);
    this.toggleHasRead = this.toggleHasRead.bind(this);
  }

  toggleHasRead() {
    const { toggleHasReadById, book } = this.props;
    toggleHasReadById(book.id);
  }

  removeBook() {
    const { removeBookById, book } = this.props;
    removeBookById(book.id);
  }

  render() {
    const { book } = this.props;
    const { title, author, year, hasRead } = book;

    return (
      <div className="book">
        <div className="title title-text">{title}</div>
        <div className="author book-info">{author}</div>
        <div className="year book-info">{year}</div>
        <div>
          <SlideCheckbox
            onClick={this.toggleHasRead}
            checked={hasRead}
            className="read-status"
            name="read-status"
          />
        </div>
        <Button onClick={this.removeBook} value="Delete" />
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  removeBookById: PropTypes.func.isRequired,
  toggleHasReadById: PropTypes.func.isRequired,
};

export default Book;
