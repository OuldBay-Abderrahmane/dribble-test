import React from "react";
import { useDispatchCart } from "../State/Cart";
import { motion } from "framer-motion";

function Product(props) {
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        backgroundColor: "orange",
        transition: { duration: 0.2 },
      }}
      className="card"
      id={props.product.id_}
    >
      <img
        className="image"
        src={props.product.photo_}
        alt=""
      />
      <h1>{props.product.title_}</h1>
      <hr className="up" />
      <div className="sub-container">
        <p>{props.product.calories_} kcal</p>
        <span className="dot"></span>
        <p>{props.product.serving_} persons</p>
      </div>
      <hr className="down" />
      <div className="price-container">
        <div className="price">{props.product.price_} $</div>
        <motion.div
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
          onTap={() => addToCart(props.product)}
          className="add-to-cart"
        >
          <span className="plus">+</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Product;
