import { styled } from "styled-components";

const StyledBasket = styled.div`
  display: grid;
  justify-content: flex-end;
  gap: 1rem;
  margin: 1rem 3rem;

  .shopping-link {
    width: max-content;

    button {
      color: white;
      background-color: #8941f7;
      border: none;
      font-weight: bold;
      padding: 0.5rem 1rem;
      border-radius: 2px;
      cursor: pointer;

      &:hover {
        background-color: #9e66f3;
      }
    }
  }

  img {
    display: block;
    width: 100%;
  }

  .item {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 0.5rem;

    border-bottom: 1px solid #ababab;
    padding-bottom: 1rem;

    .info {
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      min-width: 200px;

      .price {
        font-weight: bold;
      }

      .remove-btn {
        width: max-content;
        align-self: flex-end;
        border: none;
        padding: 0 0.5rem;
        color: white;
        background-color: #393939;
        cursor: pointer;
        font-weight: bold;

        &:hover {
          background-color: black;
        }
      }
    }
  }

  .costs {
    display: grid;
    grid-template-columns: 1fr 150px;
    text-align: right;
  }

  .total {
    font-weight: bold;
    font-size: 1.25rem;
  }

  .checkout-btn {
    color: white;
    background-color: #8941f7;
    border: none;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    font-size: 1.2rem;

    &:hover {
      background-color: #9e66f3;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 1rem;
  }

  @media screen and (max-width: 500px) {
    margin: 1rem 0;

    .shopping-link {
      display: block;
      margin: 0 auto;
    }

    .item {
      grid-template-columns: 1fr;

      .info {
        gap: 0.5rem;
      }
    }
  }
`;

export default StyledBasket;
