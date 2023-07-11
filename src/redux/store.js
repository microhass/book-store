import { configureStore } from '@reduxjs/toolkit';

import booksSlice from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

const rootReducer = {
  books: booksSlice.reducer,
  categories: categoriesSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
