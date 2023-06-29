import ProductRange from "./ProductRange";

import StyledFilter from "../css/StyledFilter.ts";
import StyledProductFilter from "../css/StyledProductFilter.ts";

import products from "../data/products.ts";

import { FilterProperties, ProductFilterProps, ProductType } from "../types";

import { useEffect, useState } from "react";

const ProductFilter = (props: ProductFilterProps) => {
  const [filter, setFilter] = useState<string[]>([props.category]);

  useEffect(() => {
    setFilter([props.category]);
  }, [props]);

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
        <li
          key={index}
          className={filter.includes(criteria) ? "selected" : ""}
          onClick={toggleFilterCriteria}
        >{`${criteria} (${quantity})`}</li>
      )
    );
  }

  function toggleFilterCriteria(e: React.MouseEvent) {
    const criteria = (e.target as HTMLLIElement).textContent?.split(" (")[0];
    if (criteria && !filter.includes(criteria))
      setFilter([...filter, criteria]);
    if (criteria && filter.includes(criteria)) {
      const index = filter.indexOf(criteria);
      setFilter([...filter.slice(0, index), ...filter.slice(index + 1)]);
    }
  }

  return (
    <StyledProductFilter>
      <StyledFilter>
        <h3>Category</h3>
        <ul>{displayFilters("category")}</ul>
        <h3>Brand</h3>
        <ul>{displayFilters("brand")}</ul>
        <h3>Colour</h3>
        <ul>{displayFilters("colour")}</ul>
      </StyledFilter>
      <ProductRange products={filteredProducts} />
    </StyledProductFilter>
  );
};

export default ProductFilter;
