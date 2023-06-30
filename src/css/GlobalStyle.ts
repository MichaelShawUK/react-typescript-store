import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<Record<string, never>>`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @font-face {
    font-family: Heebo;
    src: url(/src/assets/fonts/heebo.ttf);
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
    width: 184px;
    background-color: #545f66;
    color: white;
    padding: 0.25rem 0.5rem;
  }

  .filter-header.mobile {
    display: none;

  }

  select {
    width: 184px;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 768px) {
    .filter-header.mobile {
      display: flex;
      cursor: pointer;
      height: 32px;
    }

    .filter-desktop {
      display: none;
    }


    .aggregation {
      display: flex;
      gap: 1rem;
      
      select {
        margin: 0;
        align-self: center;
        background-color: #545f66;
        color: white;
        padding: 4px;
      }

      option {
        color: white;
      }
    }
  }

  
  

  
`;

export default GlobalStyle;
