import React from "react";
import Seo from "../../seo";
import products from "../../data/products.json";
import Product from "./Product";

export default function ProductPage() {
  return (
    <>
      <Seo title="Our products" />
      <h1>Shit we sell</h1>
      <div className="products">
        {products.map(product => (
          <Product {...product} />
        ))}
      </div>
    </>
  );
}
