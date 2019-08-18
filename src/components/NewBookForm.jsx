import React from 'react';
import Button from './Button';

export default class NewBookForm extends React.PureComponent {
  render() {
    return (
      <form className="book-form">
        <input
          type="text"
          name="title"
        />
        <input
          type="text"
          name="author"
        />
        <input
          type="number"
          name="year"
        />
        <input
          type="checkbox"
          name="status"
        />
        <Button />
      </form>
    );
  }
}
