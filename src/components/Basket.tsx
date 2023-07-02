import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import StyledBasket from "../css/StyledBasket";
import { SERVER_URL } from "../data/constants";

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

  const checkoutItems = cartItems.map((item) => {
    return { id: item.id, size: item.size };
  });

  function checkout() {
    fetch(`${SERVER_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: checkoutItems,
      }),
    })
      .then((res) => res.json())
      .then((data) => (window.location = data.url))
      .catch((e) => console.log(e));
  }

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
        <button className="checkout-btn" onClick={checkout}>
          CHECKOUT
        </button>
      )}
    </StyledBasket>
  );
};

export default Basket;
