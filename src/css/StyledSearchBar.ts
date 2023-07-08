import { styled } from "styled-components";

const StyledSearchBar = styled.div<{ $display?: boolean }>`
  display: ${(props) => (props.$display ? "flex" : "none")};
  background-color: #545f66;
  justify-content: flex-end;
  padding: 0.5rem;
  border-bottom: 2px solid #393939;
  margin-bottom: 0.5rem;

  input {
    margin-left: 0.5rem;
    outline: none;
    width: 270px;
    padding: 0 0.5rem;
    border: 1px solid #393939;
  }
`;

export default StyledSearchBar;
