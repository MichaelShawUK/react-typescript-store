import { ProductListingProps } from "../types";

import { Link } from "react-router-dom";

import StyledProductListing from "../css/StyledProductListing";

const ProductListing = (props: ProductListingProps) => {
  return (
    <StyledProductListing>
      <Link to={`/product/${props.id}`}>
        <img className="image" src={props.image}></img>
      </Link>
      <p className="name">{props.name}</p>
      <p className="price">{`£${props.price}.00`}</p>
    </StyledProductListing>
  );
};

export default ProductListing;
