import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useProduct } from "../../../hooks";
import { LoadingWraper } from "../../atoms";
import { SingleProductCard } from "./SingleProductCard";

export const SingleProduct = () => {
  const { categoryName, id } = useParams();
  const { getSingleProduct, isProductLoading, singleProduct } = useProduct();

  useEffect(() => {
    getSingleProduct({ category: categoryName, id });
  }, [id, categoryName]);
 
  return (
    <LoadingWraper isLoading={isProductLoading || !singleProduct}>
      <SingleProductCard product={singleProduct} />
    </LoadingWraper>
  );
};
