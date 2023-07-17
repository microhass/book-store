import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus() {
      return 'Under construction';
    },
  },
});

export const categoryActions = categoriesSlice.actions;

export default categoriesSlice;
