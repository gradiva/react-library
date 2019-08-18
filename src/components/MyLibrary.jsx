import React from 'react';
import BooksContainer from './BooksContainer';
import Button from './Button';
import NewBookForm from './NewBookForm';

const getInitialState = () => ({
  books: [
    { id: 'ssdf', title: 'Anna Karenina', author: 'Leo Tolstoy', year: '1873', status: 'no' },
    { id: 'sdfs', title: 'Madame Bovary', author: 'Gustave Flaubert', year: '1856', status: 'no' },
    { id: 'fdgf', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: '1925', status: 'yes' },
    { id: 'hjnv', title: 'Don Quixote', author: 'Miguel de Cervantes', year: '1605', status: 'yes' },
    { id: 'cxvs', title: 'Lolita', author: 'Vladimir Nabokov', year: '1955', status: 'no' },
    { id: 'cvbb', title: 'Ulysses', author: 'James Joyce', year: '1918', status: 'yes' },
  ],
});

const generateUID = () => Date.now().toString(32);

export default class MyLibrary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = getInitialState();

    this.addBook = this.addBook.bind(this);
    this.removeBookById = this.removeBookById.bind(this);
  }

  addBook({ title, author, year, status }) {
    const newBook = {
      id: generateUID(),
      title,
      author,
      year,
      status,
    };

    this.setState(({ books }) => ({
      books: [
        ...books,
        newBook,
      ],
    }));
  }

  removeBookById(id) {
    this.setState(({ books }) => ({
      books: books.filter((book) => book.id !== id),
    }));
  }

  render() {
    const { books } = this.state;

    return (
      <main>
        <Button value="New Book" />
        <NewBookForm addBook={this.addBook} />
        <BooksContainer
          removeBookById={this.removeBookById}
          books={books}
        />
      </main>
    );
  }
}
