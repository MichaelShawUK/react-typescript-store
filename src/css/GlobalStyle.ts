import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<Record<string, never>>`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @font-face {
    font-family: Heebo;
    src: url("src/assets/fonts/heebo.ttf");
  }

  font-family: Heebo, Arial, Helvetica, sans-serif;
  color: #393939;
  }

  body {
    max-width: 2000px;
    margin: 0 auto;
  }

  svg {
    fill: #393939
  }

  a {
    text-decoration: none;
  }

  .show-searchbar {
    display: flex;
  }

  .filter-header {
    font-weight: bold;
    display: flex;
    width: max-content;
  }

  .filter-header.mobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .filter-header.mobile {
      display: flex;
      cursor: pointer;
    }

    .filter-desktop {
      display: none;
    }
  }

  
  

  
`;

export default GlobalStyle;
