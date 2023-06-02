import React, { useEffect, useState } from "react";
import { Button, FormContainer, Input } from "../../atoms";
import { useForm } from "../../../hooks";
import { generateProductFormValues } from "./generateProductFormValues";
import FileBase64 from "react-file-base64";
import { useProduct } from "../../../hooks";
import { useNavigate } from "react-router-dom";

export const ProductForm = () => {
  const {
    formValues: productFormValues,
    onInputChange: onProductFormChange,
    setFormValues,
  } = useForm({ defaultFormValues: generateProductFormValues() });

  const { saveProduct, selectedProduct } = useProduct();

  const [image, setImage] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setFormValues(generateProductFormValues(selectedProduct));
      setImage(selectedProduct?.image);
    }
  }, [selectedProduct]);

  const onSave = () => {
    const name = productFormValues.name.value;
    const brand = productFormValues.brand.value;
    const category = productFormValues.category.value;
    const price = productFormValues.price.value;
    const description = productFormValues.description.value;

    saveProduct({
      product: { name, brand, category, price, image, description },
      isUpdating: !!selectedProduct,
      id: selectedProduct?._id,
    });
  };

  return (
    <FormContainer>
      <img
        src=""
        style={{ objectFit: "cover", width: "100%", height: "200px" }}
      />
      <Input
        name="name"
        value={productFormValues.name.value}
        onChange={onProductFormChange}
        error={productFormValues.name.error}
        label="product name"
      />
      <Input
        name="description"
        value={productFormValues.description.value}
        onChange={onProductFormChange}
        error={productFormValues.description.error}
        label="description"
      />

      <Input
        name="category"
        value={productFormValues.category.value}
        onChange={onProductFormChange}
        error={productFormValues.category.error}
        label="category"
      />
      <Input
        name="brand"
        value={productFormValues.brand.value}
        onChange={onProductFormChange}
        error={productFormValues.brand.error}
        label="brand"
      />
      <Input
        name="price"
        value={productFormValues.price.value}
        onChange={onProductFormChange}
        error={productFormValues.price.error}
        label="price"
      />
      <FileBase64
        type="file"
        multiple={false}
        onDone={({ base64 }) => {
          setImage(base64);
        }}
      />
      <Button onClick={onSave}>save</Button>
    </FormContainer>
  );
};
