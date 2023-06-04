import React from "react";
import { useProduct } from "../../hooks";

import { GridContainer, LoadingWraper } from "../atoms";
import { ProductCard } from "./categoryProducts";

export const HomePageProducts = () => {
  const { homePageProducts, isProductLoading, getHomePageProducts } =
    useProduct();

  return (
    <>
      <LoadingWraper isLoading={isProductLoading}>
        <GridContainer>
          {homePageProducts.map((item) => (
            <ProductCard product={item} key={item._id} />
          ))}
        </GridContainer>
      </LoadingWraper>
    </>
  );
};
