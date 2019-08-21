import React from 'react';
import BooksContainer from './BooksContainer';
import Button from './Button';
import NewBookForm from './NewBookForm';
import '../css/library.css';

const getInitialState = () => ({
  formHidden: true,
  books: [
    { id: 'ssdf', title: 'Anna Karenina', author: 'Leo Tolstoy', year: '1873', hasRead: false },
    { id: 'sdfs', title: 'Madame Bovary', author: 'Gustave Flaubert', year: '1856', hasRead: false },
    { id: 'fdgf', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: '1925', hasRead: true },
    { id: 'hjnv', title: 'Don Quixote', author: 'Miguel de Cervantes', year: '1605', hasRead: true },
    { id: 'cxvs', title: 'Lolita', author: 'Vladimir Nabokov', year: '1955', hasRead: false },
    { id: 'cvbb', title: 'Ulysses', author: 'James Joyce', year: '1918', hasRead: true },
  ],
});

const generateUID = () => Date.now().toString(32);

export default class MyLibrary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = getInitialState();

    this.addBook = this.addBook.bind(this);
    this.removeBookById = this.removeBookById.bind(this);
    this.toggleHasReadById = this.toggleHasReadById.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  addBook({ title, author, year, hasRead }) {
    const newBook = {
      id: generateUID(),
      title,
      author,
      year,
      hasRead,
    };

    this.setState(({ books }) => ({
      books: [
        ...books,
        newBook,
      ],
    }));
  }

  toggleHasReadById(id) {
    this.setState(({ books }) => ({
      books: books.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            hasRead: !book.hasRead,
          };
        }

        return book;
      }),
    }));
  }

  removeBookById(id) {
    this.setState(({ books }) => ({
      books: books.filter((book) => book.id !== id),
    }));
  }

  toggleForm() {
    this.setState(({ formHidden }) => ({
      formHidden: !formHidden,
    }));
  }

  render() {
    const { books } = this.state;

    return (
      <main>
        <Button value="New Book" onClick={this.toggleForm} />
        <NewBookForm displayForm={this.state.formHidden} addBook={this.addBook} />
        <BooksContainer
          removeBookById={this.removeBookById}
          toggleHasReadById={this.toggleHasReadById}
          books={books}
        />
      </main>
    );
  }
}
