import { createSlice } from '@reduxjs/toolkit';

import avatar from '../../../assets/images/avatar.jpg';
import { ProductsData } from './types';

const initialState: ProductsData = {
  products: [
    {
      id: 0,
      img: avatar,
      name: 'Butterscotch Ice-cream',
      ingres: ['Ice-Cream', 'Milk', 'Powder'],
      sold: 98,
      earned: 780000,
    },
    {
      id: 1,
      img: avatar,
      name: 'Fresh Tomato',
      ingres: ['Tomato'],
      sold: 81,
      earned: 546000,
    },
    {
      id: 2,
      img: avatar,
      name: 'Candy',
      ingres: ['Chocolate', 'Sugar'],
      sold: 54,
      earned: 457000,
    },
    {
      id: 3,
      img: avatar,
      name: 'Ice-cream Sandwich',
      ingres: ['Ice-Cream', 'Bread'],
      sold: 24,
      earned: 125000,
    },
  ],
};

const product = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    removeProduct(state, action) {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
  },
});

export const { removeProduct } = product.actions;

export default product.reducer;
