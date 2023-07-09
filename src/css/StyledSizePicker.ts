import { styled } from "styled-components";

const StyledSizePicker = styled.div`
  margin-top: 1rem;
  font-weight: bold;
  align-self: center;

  .tiles {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  .tile {
    border: 1px solid #393939;
    background-color: #ededed;
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-weight: bold;
    cursor: pointer;
    border-radius: 2px;

    &:hover {
      opacity: 0.8;
      border-color: silver;
    }
  }

  .selected {
    color: white;
    background-color: #8941f7;
  }

  @media screen and (max-width: 500px) {
    margin: 0 4px;
  }
`;

export default StyledSizePicker;
