import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus(state, action) {
      state.categories = action.payload;
    },
  },
});

export const categoryActions = categoriesSlice.actions;

export default categoriesSlice;
