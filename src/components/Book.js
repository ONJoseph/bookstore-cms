import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './Styles/Book.css';
import BookProgress from './BookProgress';

const Book = (props) => {
  const {
    title,
    author,
    id,
    category,
  } = props;
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-wrapper">
      <div className="book-detail">
        <h4 className="book-genre">{category}</h4>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <div className="book-controls">
          <button type="button" className="button-outline button-comment">
            Comments
          </button>
          <div className="vertical-separator" />
          <button type="button" className="button-outline button-remove" onClick={remove}>
            Remove
          </button>
          <div className="vertical-separator" />
          <button type="button" className="button-outline button-edit">
            Edit
          </button>
        </div>
      </div>
      <div className="book-progress">
        <BookProgress />
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
