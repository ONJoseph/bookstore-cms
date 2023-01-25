import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const checkStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <div className="categories"><span>{categories}</span></div>
      <div>
        <button className="prim-button" type="button" onClick={() => checkStatus()}>Check status</button>
      </div>
    </>
  );
}

export default Categories;
