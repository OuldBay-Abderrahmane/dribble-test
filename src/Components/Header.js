import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../State/Cart";
import { motion } from "framer-motion";

const Header = () => {
  const items = useCart();

  return (
    <div className="header">
      <div className="customer">
        <div className="location">
          <div className="bubble-image"></div>
          <div className="country-drop-list">
            <span>Location</span>
            <p>FRA</p>
          </div>
        </div>
        <div className="login">
          <div className="bubble-image"></div>

          <div className="area-drop-list">
            <span>Loged in</span>
            <p>Name</p>
          </div>
        </div>
      </div>
      <div className="main-bar">
        <div className="menu">
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/menu"
            activeStyle={{
              borderBottom: "3px solid orange",
              color: "orange",
              padding: "5px 20px",
            }}
          >
            Menu
          </NavLink>
        </div>
        <div className="logo">
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/main"
            activeStyle={{
              borderBottom: "3px solid orange",
              color: "orange",
              padding: "5px 20px",
            }}
          >
            Organic Food
          </NavLink>
        </div>
        <div className="contact">
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/contact"
            activeStyle={{
              borderBottom: "3px solid orange",
              color: "orange",
              padding: "5px 20px",
            }}
          >
            Contact
          </NavLink>
        </div>
      </div>
      <motion.div
        whileHover={{
          scale: 1.1,
          backgroundColor: "orange",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
        className="cart"
      >
        {" "}
        <NavLink style={{ textDecoration: "none", color: "white" }} to="/cart">
          🥣 My Cart ({items.length})
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Header;
