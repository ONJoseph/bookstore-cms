// Action Types
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Action Creators
const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

// Reducer
const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default: return state;
  }
};

export default reducer;

export { checkStatus };
