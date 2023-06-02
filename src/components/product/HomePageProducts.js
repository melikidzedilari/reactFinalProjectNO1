import React from "react";
import { useProduct } from "../../hooks";
// import { useEffect } from "react";
// import { useQueryParams } from "../../hooks";
import { GridContainer, LoadingWraper } from "../atoms";
import { ProductCard } from "./form";
// import { Paginate } from "./categoryProducts/Paginate";
// import { Sort } from "./categoryProducts/Sort";
// import { fetchHomePageProducts } from "../../redux/slices";
// import { useParams } from "react-router-dom";


export const HomePageProducts = () => {
  // const { products } = useParams();
  // const { value: page, changeQueryValue: changePage } = useQueryParams("page");
  // const { value: sort, changeQueryValue: changeSort } = useQueryParams("sort");

  const { homePageProducts, isProductLoading, getHomePageProducts} =
    useProduct();

  // useEffect(() => {
  //   getHomePageProducts(`${products}?page=${page}&size=7&sort=${sort}`);
  // }, [products,page, sort]);

  // useEffect(() => {
  //   changePage("page", 1);
  // }, [sort]);

  return (
    <>
      <LoadingWraper isLoading={isProductLoading}>
        {/* <Sort value={sort} changeSort={changeSort} /> */}
        <GridContainer>
          {homePageProducts.map((item) => (
            <ProductCard product={item} key={item._id} />
          ))}
        </GridContainer>
        {/* <Paginate totalPages={3} currentPage={page} changePage={changePage} /> */}
      </LoadingWraper>
    </>
  );
};
