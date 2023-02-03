import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './Styles/NewBook.css';

const NewBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...book, id: uuidv4() }));
  };
  return (
    <div>
      <form className="new-book-entry-form">
        <input
          className="input Book-Title-Input"
          placeholder="Book title"
          name="title"
          value={book.title}
          onChange={handleChange}
        />
        <input
          className="input author-field"
          placeholder="Book Author"
          name="author"
          value={book.author}
          onChange={handleChange}
        />
        <select
          className="input category-dropdown"
          name="category"
          value={book.category}
          onChange={handleChange}
        >
          <option value="romance">Romance</option>
          <option value="comedy">Comedy</option>
          <option value="fiction">Fiction</option>
          <option value="action">Action</option>
        </select>
        <button type="submit" className="btn submit-button" onClick={addNewBook}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default NewBook;
