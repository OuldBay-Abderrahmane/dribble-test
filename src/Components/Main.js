import React, { PureComponent } from "react";
import data from "../data";
import { motion } from "framer-motion";
import Product from "./Product";

export default class Main extends PureComponent {
  render() {
    return (
      <motion.div
        initial={{ y: "-10%", opacity: 0 }}
        animate={{ y: "calc( 0vh )", opacity: 1 }}
      >
        <div className="title">
          <h1>
            {data.title[0]}
            <br />
            {data.title[1]}
          </h1>
          <h2>{data.title[2]}</h2>
        </div>
        <div className="products">
          {data.products.map((product) => (
            <Product key={product.id_} product={product} />
          ))}
        </div>
      </motion.div>
    );
  }
}
