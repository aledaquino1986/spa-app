import React, { useEffect } from "react";
import Footer from "./footer/index";
import Header from "./header/index";

import "./styles.css";
export default function Layout({ children }) {
  return (
    <div className="__dml container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
