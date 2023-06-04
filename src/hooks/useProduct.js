import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleProduct,
  fetchCategoryProducts as fetchProductsCategory,
  fetchHomePageProducts,
  saveProduct as saveProductHandler,
  setSelectedProduct as selectProduct,
  rateProduct,
  queryProducts,
  clearSearchResults as clearQueryResults,
} from "../redux/slices";
import { useNavigate } from "react-router";

export const useProduct = () => {
  const dispatch = useDispatch();

  const homePageProducts = useSelector(
    (state) => state.product.homePageProducts
  );

  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  const isProductLoading = useSelector((state) => state.product.loading);

  const categories = useSelector((state) => state.product.categories);

  const singleProduct = useSelector((state) => state.product.singleProduct);

  const searchResults = useSelector((state) => state.product.searchResults);

  const categoryProducts = useSelector(
    (state) => state.product.categoryProducts
  );

  const navigate = useNavigate();

  const setSelectedProduct = (data) => {
    dispatch(selectProduct(data));
  };

  const getHomePageProducts = () => {
    dispatch(fetchHomePageProducts());
  };

  const fetchCategoryProducts = (url) => {
    dispatch(fetchProductsCategory(url));
  };

  const getSingleProduct = (data) => {
    dispatch(fetchSingleProduct(data));
  };

  const saveProduct = (data) => {
    console.log(data, "data");
    dispatch(
      saveProductHandler({
        product: data.product,
        isUpdating: data.isUpdating,
        id: data.id,
      })
    )
      .unwrap()
      .then(() => {
        setSelectedProduct(null);
        navigate("/");
      });
  };

  const rateProducts = (data) => {
    dispatch(rateProduct(data));
  };

  const searchProducts = (data) => {
    dispatch(queryProducts(data));
  };

  const clearSearchResults = () => {
    dispatch(clearQueryResults());
  };
  return {
    saveProduct,
    homePageProducts,
    getHomePageProducts,
    isProductLoading,
    setSelectedProduct,
    selectedProduct,
    singleProduct,
    categories,
    categoryProducts,
    fetchCategoryProducts,
    getSingleProduct,
    rateProducts,
    searchProducts,
    searchResults,
    clearSearchResults,
  };
};
