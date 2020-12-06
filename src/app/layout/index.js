import React, { useEffect } from "react";
import Footer from "./footer/index";
import Header from "./header/index";

import "./styles.css";
export default function Layout({ children, onChange }) {
  return (
    <div className="__dml container">
      <Header onChange={onChange} />
      {children}
      <Footer />
    </div>
  );
}
