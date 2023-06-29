import { styled } from "styled-components";

const StyledProductListing = styled.div`
  .image {
    object-fit: cover;
    display: block;
    width: 100%;
    max-width: 490px;
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
