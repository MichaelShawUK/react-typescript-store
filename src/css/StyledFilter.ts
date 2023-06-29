import { styled } from "styled-components";

const StyledFilter = styled.div`
  position: sticky;
  top: 1rem;
  align-self: flex-start;
  margin-left: 1rem;

  li {
    padding: 0 0.5rem;
    cursor: pointer;
    width: max-content;
    list-style-type: none;

    &:hover {
      font-weight: bold;
    }
  }

  .selected {
    color: white;
    background-color: #545f66;
    font-weight: bold;
    font-style: italic;

    &:hover {
      font-weight: normal;
    }
  }
`;

export default StyledFilter;
