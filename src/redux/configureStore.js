import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

export const fetchBooks = createAsyncThunk('books/fetch', async () => {
  const response = await fetch('/api/books');
  const data = await response.json();
  return data;
});

export const fetchCategories = createAsyncThunk('categories/fetch', async () => {
  const response = await fetch('/api/categories');
  const data = await response.json();
  return data;
});

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
  middleware: [thunk],
});

export default store;
