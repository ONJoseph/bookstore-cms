import { apiAddBook, apiFetchBooks, apiRemoveBook } from '../../booksAPIs/apis';

const ADD_BOOK = 'react-bookstore/book/ADD_BOOK';
const REMOVE_BOOK = 'react-bookstore/book/REMOVE_BOOK';
const FETCH_BOOKS = 'react-bookstore/book/FETCH_BOOKS';

const initialState = [];

const bookReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.newBook];
    case REMOVE_BOOK:
      return state.filter((prev) => prev.id !== action.id);
    case FETCH_BOOKS:
      return action.books;
    default:
      return state;
  }
};

export const fetchBooks = () => async (dispatch) => {
  const books = await apiFetchBooks();
  dispatch({
    type: FETCH_BOOKS,
    books,
  });
};

export const addBook = (newBook) => async (dispatch) => {
  apiAddBook(newBook);
  dispatch(
    {
      type: ADD_BOOK,
      newBook,
    },
  );
};

export const removeBook = (id) => async (dispatch) => {
  await apiRemoveBook(id);
  dispatch(
    {
      type: REMOVE_BOOK,
      id,
    },
  );
};

export default bookReducer;
