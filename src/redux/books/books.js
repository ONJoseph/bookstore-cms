import apis from '../../booksAPIs/apis';
import '../../styles/App.css';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_ALL_BOOKS = 'GET_ALL_BOOKS';

// Initial State
const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    case GET_ALL_BOOKS:
      return action.books;
    default:
      return state;
  }
};

export const addBooks = (book) => async (dispatch) => {
  try {
    await apis.addBooks(book);
    dispatch({
      type: ADD_BOOK,
      book,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeBook = (book) => async (dispatch) => {
  try {
    await apis.removeBook(book);
    dispatch({
      type: REMOVE_BOOK,
      book,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchBooks = () => async (dispatch) => {
  try {
    const books = await apis.fetchBooks();
    dispatch({
      type: GET_ALL_BOOKS,
      books,
    });
  } catch (error) {
    console.log(error);
  }
};

export default booksReducer;
