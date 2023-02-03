const CHECK_STATUS = 'react-bookstore/category/CHECK_STATUS';

const categoryReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};

export const checkStatus = () => (
  {
    type: CHECK_STATUS,
  }
);

export default categoryReducer;
