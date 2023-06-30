import { styled } from "styled-components";

const StyledProductPage = styled.div`
  max-width: 1200px;
  margin: 1rem auto 0;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 1rem;

  .name,
  .price {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .price {
    font-size: 1.5rem;
  }

  .description {
    word-spacing: 0.2rem;
    line-height: 1.5rem;
  }

  .images {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr;

    max-width: 808px;

    img {
      width: 100%;
      display: block;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    .images {
      grid-template-columns: 1fr;
    }
  }
`;

export default StyledProductPage;
