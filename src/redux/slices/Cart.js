import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../helpers";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/users/${userId}/cart`);
      return data;
    } catch (error) {
      return rejectWithValue("couldn't fetch Cart");
    }
  }
);

export const saveCart = createAsyncThunk(
  "cart/saveCart",
  async ({ userId, cartItems }, { dispatch, rejectWithValue }) => {
    try {
      await axiosInstance.put(`/users/${userId}/cart`, { products: cartItems });
      dispatch(fetchCart(userId));
    } catch (error) {
      rejectWithValue("couldn't save Cart");
    }
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    error: null,
    cartItems: [],
  },

  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const productId = product._id;
      const cartItems = state.cartItems?.find(
        (item) => item.product._id === productId
      );

      if (cartItems) {
        const updatedCart = state.cartItems.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        state.cartItems = updatedCart;
      } else {
        state.cartItems.push({ product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const cartItems = state.cartItems?.find(
        (item) => item.product._id === productId
      );
      if (cartItems.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.product._id !== productId
        );
      } else {
        state.cartItems = state.cartItems.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cartItems = action.payload.cart;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(saveCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveCart.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(saveCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
