import ProductRange from "./ProductRange";

import products from "../data/products.ts";

import { ProductFilterProps, FilterProperties, ProductType } from "../types";

const ProductFilter = (props: ProductFilterProps) => {
  const filteredProducts = products.filter(
    (product) => product.category === props.category
  );

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

  return (
    <>
      <div>
        <h3>Category</h3>
        <ul>
          {Object.entries(properties.category).map((category, index) => (
            <li key={index}>{`${category[0]} (${category[1]})`}</li>
          ))}
        </ul>
        <h3>Brand</h3>
        <ul>
          {Object.entries(properties.brand).map((brand, index) => (
            <li key={index}>{`${brand[0]} (${brand[1]})`}</li>
          ))}
        </ul>
        <h3>Colour</h3>
        <ul>
          {Object.entries(properties.colour).map((colour, index) => (
            <li key={index}>{`${colour[0]} (${colour[1]})`}</li>
          ))}
        </ul>
      </div>
      <ProductRange products={filteredProducts} />
    </>
  );
};

export default ProductFilter;
