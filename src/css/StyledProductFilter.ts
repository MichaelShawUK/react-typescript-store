import { styled } from "styled-components";

const StyledProductFilter = styled.div`
  display: grid;
  grid-template-columns: 200px minmax(320px, 1fr);

  dialog {
    margin: 47px auto 0;
    width: 300px;

    .modal {
      margin-bottom: 3rem;
    }

    button {
      border: none;
      background-color: #393939;
      color: white;
      font-weight: bold;
      padding: 0.25rem 0.5rem;
      margin: 0.5rem;
      border-radius: 2px;
      cursor: pointer;
      justify-self: center;
      position: absolute;
      right: 0;

      &:hover {
        background-color: #000;
      }
    }

    .abs-btn {
      top: 0;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(320px, 1fr);
  }
`;

export default StyledProductFilter;
