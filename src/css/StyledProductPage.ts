import { styled } from "styled-components";

const StyledProductPage = styled.div`
  max-width: 1200px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 1rem;
  padding: 0 0.5rem;

  .info {
    display: flex;
    flex-direction: column;
  }

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
    grid-auto-rows: min-content;

    max-width: 808px;

    img {
      width: 100%;
      display: block;
    }
  }

  .add-btn {
    width: 320px;
    height: 3rem;
    border: none;
    color: white;
    background-color: #8941f7;
    font-weight: bold;
    font-size: 16px;
    border-radius: 2px;
    margin-top: 1rem;
    cursor: pointer;
    align-self: center;

    &:hover {
      background-color: #9e66f3;
    }
  }

  .error {
    color: red;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    padding: 0;

    .images {
      grid-template-columns: 1fr;
    }

    .name,
    .price,
    .description {
      margin: 0 4px;
    }
  }
`;

export default StyledProductPage;
