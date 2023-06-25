import { styled } from "styled-components";

const StyledProductRange = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1rem;

  max-width: 1080px;
`;

export default StyledProductRange;
