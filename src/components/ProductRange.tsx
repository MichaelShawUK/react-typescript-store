import { ProductRangeProps } from "../types";

import StyledProductRange from "../css/StyledProductRange.ts";

import ProductListing from "./ProductListing.tsx";

const ProductRange = (props: ProductRangeProps) => {
  switch (props.sort) {
    case "PRICE ASC":
      props.products.sort((a, b) => a.price - b.price);
      break;
    case "PRICE DESC":
      props.products.sort((a, b) => b.price - a.price);
      break;
    case "NAME ASC":
      props.products.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
      break;
    case "NAME DESC":
      props.products.sort((a, b) =>
        b.name.toLowerCase().localeCompare(a.name.toLowerCase())
      );
  }

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
