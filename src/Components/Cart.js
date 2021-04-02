import React from "react";
import { useCart, useDispatchCart } from "../State/Cart.js";
import { motion } from "framer-motion";

const CartItem = ({ product, index, handleRemove }) => {
  return (
    <div className="cart-item">
      <img className="image" src={product.photo_} alt="" />
      <div className="text">
        <p>{product.title_}</p>
        <motion.div
          whileHover={{
            scale: 1.1,
            backgroundColor: "orange",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
          className="remove"
          onClick={() => handleRemove(index)}
        >
          DELETE
        </motion.div>
      </div>
    </div>
  );
};

export default function Cart() {
  const items = useCart();
  const dispatch = useDispatchCart();

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };
  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-card"><h2>Cart is Empty</h2></div>
      </div>
    );
  }
  return (
    <div className="cart-page">
      <div className="cart-card">
        <h2> Cart </h2>
        <div className="items">
          {items.map((item, index) => (
            <CartItem
              handleRemove={handleRemove}
              key={index}
              product={item}
              index={index}
            />
          ))}
        </div>

        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
          className="checkout"
        >
          BUY NOW
        </motion.div>
      </div>
    </div>
  );
}
