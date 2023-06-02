export { authenticateUser, userReducer, logout } from "./userSlice";
// export { userReducer } from "./userSlice";
export {
  productReducer,
  saveProduct,
  fetchHomePageProducts,
  fetchCategoryProducts,
  setSelectedProduct,
  queryProducts,
  rateProduct,
  fetchSingleProduct,
  // fetchDeleteProduct,
  clearSearchResults,
} from "./productSlice";

export {
  addToCart,
  cartReducer,
  removeFromCart,
  fetchCart,
  saveCart,
  clearCart,
} from "./Cart";
