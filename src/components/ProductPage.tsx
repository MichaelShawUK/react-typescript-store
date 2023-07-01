import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import CartContext from "../context/CartContext.ts";
import { CartItemType } from "../types";
import products from "../data/products.ts";
import StyledProductPage from "../css/StyledProductPage.ts";
import SizePicker from "./SizePicker.tsx";

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  const [cartItems, setCartItems] = useContext(CartContext);

  const navigate = useNavigate();

  const [size, setSize] = useState(0);
  const [error, setError] = useState(false);

  if (!product) {
    return <div>Could not find product</div>;
  }

  function handleAddItem() {
    if (!size) setError(true);
    else {
      if (product) {
        (setCartItems as React.Dispatch<React.SetStateAction<CartItemType[]>>)([
          ...(cartItems as CartItemType[]),
          { ...product, size },
        ]);
        navigate("/checkout");
      }
    }
  }

  return (
    <StyledProductPage>
      <div className="images">
        {product.images.map((image, index) => (
          <Link to={image} target="_blank" key={index}>
            <img src={image}></img>
          </Link>
        ))}
      </div>
      <div className="info">
        <div className="name">{product.name}</div>
        <div className="price">{`£${product.price}.00`}</div>
        <div className="description">{product.description}</div>
        <SizePicker category={product.category} setSize={setSize} size={size} />
        {error && <div className="error">Select size</div>}
        <button className="add-btn" onClick={handleAddItem}>
          ADD TO BASKET
        </button>
      </div>
    </StyledProductPage>
  );
};

export default ProductPage;
