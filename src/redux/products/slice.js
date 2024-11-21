import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductsById } from './operations';

const INITIAL_STATE = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,

  extraReducers: builder => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data.data;
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload.data.data;
      })
      .addMatcher(
        isAnyOf(fetchProducts.pending, fetchProductsById.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(fetchProducts.rejected, fetchProductsById.rejected),
        handleRejected
      );
  },
});

export const productsReducer = productsSlice.reducer;
