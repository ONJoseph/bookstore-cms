import React from 'react';
import './Styles/BookProgress.css';

const BookProgress = () => (
  <div className="book-progress-bar">
    <div className="book-progress-circular-bar">
      <div className="spinning-wheel" />
      <div className="progress-value">
        <span className="progress-value-text">74%</span>
        <span className="progress-value-completion">Completed</span>
      </div>
    </div>
    <div className="separator" />
    <div className="current-chapter-progress-container">
      <h3>Current Chapter</h3>
      <h4 className="current-chapter">Chapter 17</h4>
      <button type="button" className="button button-submit-progress">Update Progress</button>
    </div>
  </div>
);

export default BookProgress;
