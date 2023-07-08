import { styled } from "styled-components";

const StyledError = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @font-face {
    font-family: Heebo;
    src: url("/fonts/heebo.ttf");
  }

  font-family: Heebo, Arial, Helvetica, sans-serif;
  color: #393939;

  a {
    color: inherit;
  }
`;

export default StyledError;
