import StyledCollectionSlideshow from "../css/StyledCollectionSlideshow";

import { Link } from "react-router-dom";
import { SlideshowDataType } from "../types";

import { useState } from "react";

const slideshowData: SlideshowDataType[] = [
  {
    collection: "Men's",
    image:
      "https://res.cloudinary.com/dzpobfxwj/image/upload/v1687463982/shoestore/ehkuhgr2znilqyhztb4v.jpg",
    link: "men",
  },
  {
    collection: "Women's",
    image:
      "https://res.cloudinary.com/dzpobfxwj/image/upload/v1687464086/shoestore/meveb0dz03cdpljagojt.jpg",
    link: "women",
  },
  {
    collection: "Junior",
    image:
      "https://res.cloudinary.com/dzpobfxwj/image/upload/v1687464136/shoestore/iwwcvcys8cjf3quyeozw.jpg",
    link: "junior",
  },
];

const CollectionSlideshow = () => {
  const [slideshowPosition, setSlideshowPosition] = useState(0);

  const data = slideshowData[slideshowPosition];

  function backSlideshow(): void {
    setSlideshowPosition((p) => {
      if (p === 0) {
        return 2;
      } else {
        return p - 1;
      }
    });
  }

  function forwardSlideshow(): void {
    setSlideshowPosition((p) => {
      if (p === 2) {
        return 0;
      } else {
        return p + 1;
      }
    });
  }

  return (
    <StyledCollectionSlideshow>
      <p className="collection">{data.collection} Collection</p>
      <img src={data.image}></img>
      <Link to={data.link}>Enter Shop</Link>
      <button className="back-button" onClick={backSlideshow}>
        &lt;
      </button>
      <button className="forward-button" onClick={forwardSlideshow}>
        &gt;
      </button>
    </StyledCollectionSlideshow>
  );
};

export default CollectionSlideshow;
