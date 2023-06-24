import { styled } from "styled-components";

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 640px 1fr;

  .hero-image {
    /* object-fit: cover; */
  }

  .hero-text {
    display: grid;

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.5rem;
      font-weight: normal;
    }
  }
`;

export default StyledHome;
