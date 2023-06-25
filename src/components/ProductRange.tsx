import { ProductRangeProps } from "../types";

import products from "../data/products.ts";

import StyledProductRange from "../css/StyledProductRange.ts";

import ProductListing from "./ProductListing.tsx";

const ProductRange = (props: ProductRangeProps) => {
  const filterProducts = products.filter(
    (product) => product.category === props.category
  );

  return (
    <StyledProductRange>
      {filterProducts.map((product) => (
        <ProductListing
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </StyledProductRange>
  );
};

export default ProductRange;
