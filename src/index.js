import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BooksContainer from './BooksContainer';

class MyLibrary extends React.Component {
  render() {
    return (
      <body>
        <BooksContainer books={this.props.books} />
      </body>
    );
  }
}

const BOOKS = [
  { title: 'Anna Karenina', author: 'Leo Tolstoy', year: '1873', status: 'no' },
  { title: 'Madame Bovary', author: 'Gustave Flaubert', year: '1856', status: 'no' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: '1925', status: 'yes' },
  { title: 'Don Quixote', author: 'Miguel de Cervantes', year: '1605', status: 'yes' },
  { title: 'Lolita', author: 'Vladimir Nabokov', year: '1955', status: 'no' },
  { title: 'Ulysses', author: 'James Joyce', year: '1918', status: 'yes' },
];

ReactDOM.render(
  <MyLibrary books={BOOKS} />,
  document.getElementById('root')
);
