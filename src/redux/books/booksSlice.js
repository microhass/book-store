import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'mmagz7owsjIKvB9f6zaA';
const apiEndpoint = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const bookStoreAPI = `${apiEndpoint}${appId}/books/`;

export const fetchAPIBooks = createAsyncThunk(
  'books/fetchAll',
  async ({ method, newBook, bookId }) => {
    switch (method) {
      case 'post':
        await axios.post(`${bookStoreAPI}`, newBook);
        break;

      case 'delete':
        await axios.delete(`${bookStoreAPI}${bookId}`);
        break;

      default:
        break;
    }

    const res = await axios.get(`${bookStoreAPI}`);
    return res.data;
  },
);

const initialState = {
  books: [],
  isLoading: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAPIBooks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchAPIBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      const res = action.payload;
      const updatedBooks = [];
      Object.keys(res)?.forEach((item) => {
        updatedBooks.push({
          item_id: item,
          ...res[item][0],
        });
      });
      state.books = updatedBooks;
    });
  },
});

export const bookActions = booksSlice.actions;

export default booksSlice;
