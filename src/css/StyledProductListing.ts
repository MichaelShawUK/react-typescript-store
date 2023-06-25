import { styled } from "styled-components";

const StyledProductListing = styled.div`
  .image {
    object-fit: cover;
    display: block;
    width: 100%;
  }

  .name,
  .price {
    font-size: 0.85rem;
  }

  .price {
    font-weight: bold;
  }
`;

export default StyledProductListing;
