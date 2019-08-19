import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class NewBookForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = React.createRef();
    this.authorRef = React.createRef();
    this.yearRef = React.createRef();
    this.statusRef = React.createRef();

    this.onAddBookClick = this.onAddBookClick.bind(this);
  }

  onAddBookClick() {
    const { addBook } = this.props;
    const { title, author, year, status } = this.getInputValues();

    addBook({ title, author, year, status });
  }

  getInputValues() {
    return {
      title: this.titleRef.current.value,
      author: this.authorRef.current.value,
      year: this.yearRef.current.value,
      status: this.statusRef.current.value,
    };
  }

  render() {
    return (
      <form className="book-form">
        <input ref={this.titleRef} type="text" name="title" />
        <input ref={this.authorRef} type="text" name="author" />
        <input ref={this.yearRef} type="number" name="year" />
        <input ref={this.statusRef} type="checkbox" name="status" />

        <Button onClick={this.onAddBookClick} value="Add Book" />
      </form>
    );
  }
}

NewBookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};
