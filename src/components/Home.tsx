import women from "../assets/images/women.jpg";

import StyledHome from "../css/StyledHome";

const Home = () => {
  return (
    <StyledHome>
      <img src={women} className="hero-image"></img>
      <div className="hero-text">
        <h1>
          Summer<br></br>Collection
        </h1>
        <p>
          No matter what your needs, find your shoes from our various
          collections.
        </p>
      </div>
    </StyledHome>
  );
};

export default Home;
