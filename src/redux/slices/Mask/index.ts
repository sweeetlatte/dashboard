import { createSlice } from '@reduxjs/toolkit';

const mask = createSlice({
  name: 'mask',
  initialState: false,
  reducers: {
    toggleMask: (state) => {
      return state === false ? true : false;
    },
  },
});

export const { toggleMask } = mask.actions;

export default mask.reducer;
