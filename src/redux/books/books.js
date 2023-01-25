// Action Types
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Initial State
const initialState = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' },
];

// Action Creators
const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

export { addBook, removeBook };

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((b) => b.id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
