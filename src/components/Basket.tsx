import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import StyledBasket from "../css/StyledBasket";

const Basket = () => {
  const [cartItems, setCartItems] = useContext(CartContext);

  function removeItem(e: React.MouseEvent): void {
    const deleteIndex = (e.target as HTMLButtonElement).dataset.index;
    if (!deleteIndex) return;
    setCartItems([
      ...cartItems.slice(0, +deleteIndex),
      ...cartItems.slice(+deleteIndex + 1),
    ]);
  }

  const total = cartItems.reduce((total, current) => total + current.price, 0);

  return (
    <StyledBasket>
      <Link to="/search" className="shopping-link">
        <button>CONTINUE SHOPPING</button>
      </Link>
      <h3>Basket</h3>
      {cartItems.length === 0 && <div>There are 0 items in your basket</div>}
      {cartItems.map((cartItem, index) => (
        <div key={index} className="item">
          <Link to={`/product/${cartItem.id}`}>
            <img src={cartItem.images[0]}></img>
          </Link>
          <div className="info">
            <div className="name">{cartItem.name}</div>
            <div className="size">Size: {cartItem.size}</div>
            <div className="price">Price: £{cartItem.price}.00</div>
            <button
              data-index={index}
              onClick={removeItem}
              className="remove-btn"
            >
              REMOVE
            </button>
          </div>
        </div>
      ))}
      <div className="costs">
        <div>Subtotal: </div>
        <div>£{total}.00</div>
        <div>Delivery: </div>
        <div>£0.00</div>
        <div className="total">Total: </div>
        <div className="total">£{total}.00</div>
      </div>
      {cartItems.length > 0 && (
        <button className="checkout-btn">CHECKOUT</button>
      )}
    </StyledBasket>
  );
};

export default Basket;
