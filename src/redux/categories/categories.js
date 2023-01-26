import { v4 as uuidv4 } from 'uuid';

// Action Types
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Initial State
const initialState = {
  status: '',
};

// Action Creators
const checkStatus = (status) => ({
  type: CHECK_STATUS,
  payload: status,
  item_id: uuidv4(),
});

export { checkStatus };

// Reducer
const categories = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export default categories;
