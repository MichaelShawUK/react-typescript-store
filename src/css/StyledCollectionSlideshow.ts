import { styled } from "styled-components";

const StyledCollectionSlideshow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-self: center;

  max-width: 400px;
  background-color: #393939;

  border: 2px solid #393939;
  height: min-content;

  position: relative;

  .collection {
    color: white;
    font-size: 1.5rem;
  }

  img {
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    color: white;
    width: 100%;
    text-align: center;
  }

  button {
    position: absolute;
    top: 40%;
    padding: 0 0.5rem;
    border: none;
    font-weight: bold;
    font-size: 1.5rem;
    background-color: rgba(57, 57, 57, 0.2);
    cursor: pointer;
    border-radius: 2px;

    &:hover {
      background-color: rgba(57, 57, 57, 0.7);
      color: white;
    }
  }

  .back-button {
    left: 10px;
  }

  .forward-button {
    right: 10px;
  }
`;

export default StyledCollectionSlideshow;
