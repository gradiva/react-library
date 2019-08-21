import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../css/form.css';

export default class NewBookForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = React.createRef();
    this.authorRef = React.createRef();
    this.yearRef = React.createRef();
    this.statusRef = React.createRef();

    this.onAddBookClick = this.onAddBookClick.bind(this);
    this.onToggleForm = this.onToggleForm.bind(this);
  }

  onAddBookClick() {
    const { addBook } = this.props;
    const { title, author, year, status } = this.getInputValues();

    addBook({ title, author, year, status });
  }

  onToggleForm() {
    const { displayForm } = this.props;
    let show;
    if (displayForm) {
      show = 'display-form';
    } else { show = 'hide-form'; }
    return show;
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
      <form className={`book-form ${this.onToggleForm()}`}>
        <label htmlFor="title">
          Title
          <input ref={this.titleRef} type="text" name="title" />
        </label>
        <label htmlFor="author">
          Author
          <input ref={this.authorRef} type="text" name="author" />
        </label>
        <label htmlFor="year">
          Year
          <input ref={this.yearRef} type="number" name="year" />
        </label>
        <label htmlFor="status">
          Status
          <input ref={this.statusRef} type="checkbox" name="status" />
        </label>
        <Button onClick={this.onAddBookClick} value="Add Book" />
      </form>
    );
  }
}

NewBookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
  displayForm: PropTypes.bool.isRequired,
};
