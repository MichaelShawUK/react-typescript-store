import { ProductRangeProps } from "../types";

import StyledProductRange from "../css/StyledProductRange.ts";

import ProductListing from "./ProductListing.tsx";

const ProductRange = (props: ProductRangeProps) => {
  return (
    <StyledProductRange>
      {props.products.length ? (
        props.products.map((product) => (
          <ProductListing
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))
      ) : (
        <div>No products found</div>
      )}
    </StyledProductRange>
  );
};

export default ProductRange;
