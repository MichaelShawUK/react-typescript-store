import ProductRange from "./ProductRange";

import products from "../data/products.ts";

import { ProductFilterProps, FilterProperties, ProductType } from "../types";

import { useState } from "react";

const ProductFilter = (props: ProductFilterProps) => {
  const [filter, setFilter] = useState(["white", "men", "Nike"]);

  const filteredProducts = products.filter((product) => {
    const { category, brand, colour } = product;
    for (const criteria of filter) {
      if (category === criteria || brand === criteria || colour === criteria)
        continue;
      else return false;
    }
    return true;
  });

  const properties: FilterProperties = {
    category: {},
    brand: {},
    colour: {},
  };

  function calculateProperties(
    product: ProductType,
    property: "category" | "brand" | "colour"
  ): void {
    if (product[property] in properties[property])
      properties[property][product[property]]++;
    else properties[property][product[property]] = 1;
  }

  filteredProducts.forEach((product) => {
    calculateProperties(product, "category");
    calculateProperties(product, "brand");
    calculateProperties(product, "colour");
  });

  function displayFilters(property: "category" | "brand" | "colour") {
    return Object.entries(properties[property]).map(
      ([criteria, quantity], index) => (
        <li key={index}>{`${criteria} (${quantity})`}</li>
      )
    );
  }

  return (
    <>
      <div>
        <h3>Category</h3>
        <ul>{displayFilters("category")}</ul>
        <h3>Brand</h3>
        <ul>{displayFilters("brand")}</ul>
        <h3>Colour</h3>
        <ul>{displayFilters("colour")}</ul>
      </div>
      <ProductRange products={filteredProducts} />
    </>
  );
};

export default ProductFilter;
