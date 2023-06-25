import hero from "../assets/images/hero.jpg";

import StyledHome from "../css/StyledHome";

import CollectionSlideshow from "./CollectionSlideshow";

const Home = () => {
  return (
    <StyledHome>
      <img src={hero} className="hero-image"></img>
      <div className="hero-text">
        <h1>
          Summer<br></br>
          <span className="tab">&emsp;</span>Collection
        </h1>
        <CollectionSlideshow />
        <p>
          <i>
            No matter what your needs, find your shoes from our various
            collections.
          </i>
        </p>
      </div>
    </StyledHome>
  );
};

export default Home;
