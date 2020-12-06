import React from "react";
import Seo from "../../seo/index";

export default function AboutUsPage({ counter }) {
  return (
    <>
      <Seo title="About us" />
      <h1>About us</h1>
      {counter}
    </>
  );
}
