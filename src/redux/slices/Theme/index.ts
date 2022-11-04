import { createSlice } from '@reduxjs/toolkit';

const theme = createSlice({
  name: 'cart',
  initialState: 'light-theme',
  reducers: {
    toggleTheme: (state) => {
      return state === 'dark-theme' ? 'light-theme' : 'dark-theme';
    },
  },
});

export const { toggleTheme } = theme.actions;

export default theme.reducer;
