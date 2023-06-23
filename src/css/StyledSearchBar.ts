import { styled } from "styled-components";

const StyledSearchBar = styled.div`
  background-color: #eee;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  border-bottom: 2px solid #393939;
  display: none;

  input {
    margin-left: 0.5rem;
    outline: none;
    width: 270px;
    padding: 0 0.5rem;
    border: 1px solid #393939;
  }
`;

export default StyledSearchBar;
