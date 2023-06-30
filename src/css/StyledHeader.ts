import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  margin: 0 3rem;
  align-items: center;
  gap: 1rem;

  .logo {
    justify-self: flex-start;
    font-size: 3rem;
    font-weight: bold;
    cursor: pointer;
  }

  .menu {
    justify-self: center;
  }

  .menu ul {
    list-style-type: none;
    display: flex;
    gap: 1rem;
    font-weight: 500;

    li {
      cursor: pointer;
      position: relative;

      &:hover::before {
        content: "";
        position: absolute;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background-color: #393939;
      }
    }
  }

  .menuSVG {
    display: none;
  }

  .bag-container::before {
    content: attr(data-cartcount);
    position: absolute;
    background-color: #8941f7;
    color: white;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    text-align: center;
    opacity: 0.8;
    font-size: 16px;
    margin-top: 1rem;
    margin-left: 1rem;
    pointer-events: none;
  }

  .icons {
    justify-self: flex-end;
    display: flex;
    gap: 1rem;

    svg {
      cursor: pointer;

      &:hover {
        background-color: #eee;
      }
    }
  }

  dialog {
    width: 100%;
    top: 47px;
    border: none;
    padding: 1rem;

    &:focus-visible {
      outline: none;
    }
  }

  .modal {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  @media screen and (max-width: 768px) {
    margin: 0 1rem;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;

    .logo {
      font-size: 2rem;
    }

    .menu {
      display: none;
    }

    .menuSVG {
      display: block;
    }
  }
`;

export default StyledHeader;
