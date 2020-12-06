import React from "react";
import Seo from "../../seo/index";

export default function Homepage({ counter }) {
  return (
    <>
      <Seo title="Welcome to the machine" />
      <h1>Welcome to the machine</h1>
      {counter}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit
        fugiat iusto natus a aut voluptatibus quas laboriosam perspiciatis
        tenetur harum, molestias ipsum eligendi amet placeat eos. Quis, ea
        fugiat!
      </p>
    </>
  );
}
