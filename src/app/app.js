import React, { useState, useEffect } from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Homepage from "./pages/homepage/index";
import AboutUsPage from "./pages/about-us/index";
import ProductsPage from "./pages/products";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/about-us">
            <AboutUsPage />
          </Route>

          <Route exact path="/products">
            <ProductsPage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
