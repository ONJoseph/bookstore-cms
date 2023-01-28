import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../../redux/books/books';

function AddBooks() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const booksCollection = {
      id: uuidv4(),
      title,
      category,
      author,
    };
    dispatch(addBooks(booksCollection));
    setTitle('');
    setAuthor('');
    setCategory('Select');
  };

  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      <form action="" className="add-book-form" onSubmit={handleSubmit}>
        <input
          className="title-input"
          type="text"
          placeholder="Input Book"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="author-input"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <select className="category-input" onChange={(e) => setCategory(e.target.value)}>
          <option value="Select">Select</option>
          <option value="Technology">Technology</option>
          <option value="Fiction">Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
          <option value="Science">Science</option>
          <option value="Art">Art</option>
          <option value="History">History</option>
        </select>
        <button type="submit" className="button-submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBooks;
