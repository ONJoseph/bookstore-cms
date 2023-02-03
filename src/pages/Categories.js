import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../components/Styles/Categories.css';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((status) => status.categoryReducer);
  const statusChecking = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="genre-container">
      <button type="button" onClick={statusChecking} className="btn button-status">
        Check status
      </button>
      { status ? (
        <h3 className="genre-status">{status}</h3>
      ) : ''}
    </div>
  );
};
export default Categories;
