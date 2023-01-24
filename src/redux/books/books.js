// Action Types
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Initial State
const initialState = [];

// Action Creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((b) => b.id !== action.book.id);
    default:
      return state;
  }
};
