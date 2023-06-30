import { useParams } from "react-router-dom";
import products from "../data/products.ts";
import StyledProductPage from "../css/StyledProductPage.ts";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  return (
    <StyledProductPage>
      <div className="images">
        {product?.images.map((image, index) => (
          <Link to={image} target="_blank" key={index}>
            <img src={image}></img>
          </Link>
        ))}
      </div>
      <div className="info">
        <div className="name">{product?.name}</div>
        <div className="price">{`£${product?.price}.00`}</div>
        <div className="description">{product?.description}</div>
      </div>
    </StyledProductPage>
  );
};

export default ProductPage;
