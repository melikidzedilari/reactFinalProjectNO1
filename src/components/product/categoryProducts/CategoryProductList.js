import React, { useEffect } from "react";
import { LoadingWraper, GridContainer } from "../../atoms";
import { ProductCard } from "../form/ProductCard";
import { useProduct, useQueryParams } from "../../../hooks";
import { useParams } from "react-router-dom";
import { Paginate } from "./Paginate";
import { Sort } from "./Sort";




export const CategoryProductList = () => {
  const { categoryProducts, fetchCategoryProducts, isProductLoading } =
    useProduct();
  const { products } = categoryProducts;
  console.log(products, "products");
  const { categoryName } = useParams();
  const { value: page, changeQueryValue: changePage } = useQueryParams("page");
  const { value: sort, changeQueryValue: changeSort } = useQueryParams("sort");

  useEffect(() => {
    fetchCategoryProducts(
      `${categoryName}?page=${page}&size=7&sort=${sort}`
    );
  }, [categoryName, page, sort]);

  useEffect(() => {
    changePage("page", 1);
  }, [sort]);

  return (
    <LoadingWraper isLoading={isProductLoading}>
      <Sort value={sort} changeSort={changeSort} />
      <GridContainer>
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </GridContainer>
      <Paginate  totalPages={2} currentPage={page} changePage={changePage} />
    </LoadingWraper>
  );
};
