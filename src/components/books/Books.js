import React from 'react';
import AddBook from './AddBook';
import BookList from './BookList';

function Books() {
  return (
    <div className="book__container">
      <BookList />
      <AddBook />
    </div>
  );
}

export default Books;
