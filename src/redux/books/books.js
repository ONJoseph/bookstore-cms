import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const addBookAction = (title, author) => ({
  type: ADD_BOOK,
  payload: {
    title,
    author,
    item_id: uuidv4(),
  },
});

export const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    item_id: id,
  },
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload.item_id);
    default:
      return state;
  }
};

export default booksReducer;
