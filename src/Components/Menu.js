import React, { PureComponent } from "react";
import Pdf from "./Pdf";
import { motion } from "framer-motion";

export default class Menu extends PureComponent {
  render() {
    return (
      <div className="main-menu">
        <Pdf />
      </div>
    );
  }
}
