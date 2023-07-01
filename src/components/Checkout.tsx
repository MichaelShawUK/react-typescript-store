import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const Checkout = () => {
  const [cartItems, setCartItems] = useContext(CartContext);

  function removeItem(e: React.MouseEvent): void {
    const deleteIndex = (e.target as HTMLButtonElement).dataset.index;
    if (!deleteIndex) return;
    setCartItems([
      ...cartItems.slice(0, +deleteIndex),
      ...cartItems.slice(+deleteIndex + 1),
    ]);
  }

  return (
    <div>
      <p>Checkout</p>
      <Link to="/search">
        <button>Continue Shopping</button>
      </Link>
      {cartItems.map((cartItem, index) => (
        <div key={index}>
          <Link to={`/product/${cartItem.id}`}>
            <img src={cartItem.image}></img>
          </Link>
          <div>{cartItem.name}</div>

          <div>
            Size {cartItem.size} {cartItem.category}
          </div>
          <div>Price: £{cartItem.price}.00</div>
          <button data-index={index} onClick={removeItem}>
            REMOVE
          </button>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
