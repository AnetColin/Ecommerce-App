import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cartItems.map((item, index) => (
        <div key={index} className="border p-2 mb-2">
          {item.name} - ₹{item.price}
        </div>
      ))}

      <h2 className="mt-4 font-bold">Total: ₹{total}</h2>
    </div>
  );
};

export default Cart;
