import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const bookStoreAPI = 'http://localhost:8000/users';

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
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  isLoading: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    createBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload.bookId,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAPIBooks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchAPIBooks.fulfilled, (state, action) => {
      console.log(action.payload);
      // state.books.push(action.payload);
    });
  },
});

export const bookActions = booksSlice.actions;

export default booksSlice;
