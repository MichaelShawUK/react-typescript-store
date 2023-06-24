import { styled } from "styled-components";

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.6fr;

  background-color: #f7f7f7;

  .hero-image {
    object-fit: cover;
    width: 100%;
  }

  .hero-text {
    display: grid;
    justify-content: center;

    grid-template-rows: auto auto 1fr;
    gap: 2rem;

    h1 {
      margin-top: 3rem;
      font-size: 3.5vw;
      align-self: center;
    }

    > p {
      font-size: 1.3vw;
      font-weight: normal;
      margin-top: 1.1rem;
    }
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;

    .hero-text {
      h1 {
        font-size: 4rem;
        text-align: center;
      }

      > p {
        font-size: 1.5rem;
        text-align: center;
        margin: 0 3vw;
        padding-bottom: 3rem;
      }

      .tab {
        display: none;
      }
    }

    .hero-image {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .hero-text {
      h1 {
        font-size: 3rem;
      }

      > p {
        font-size: 1rem;
      }
    }
  }
`;

export default StyledHome;
