import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    createBook(state, action) {
      state.books = [...state.books, action.payload];
    },
    deleteBook(state, action) {
      state.books = state.books.filter(
        (book) => book.id !== action.payload.id,
      );
    },
  },
});

export const bookActions = booksSlice.actions;

export default booksSlice;
