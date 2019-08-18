import React from 'react';
import BooksContainer from './BooksContainer';
import Button from './Button';
import NewBookForm from './NewBookForm';

export default class MyLibrary extends React.PureComponent {
  render() {
    return (
      <main>
        <Button />
        <NewBookForm />
        <BooksContainer books={this.props.books} />
      </main>
    );
  }
}
