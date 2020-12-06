import React, { useState } from "react";
import "./style.css";

import Options from "./option";

export default function Product({ name, image, sizes, styles, colors }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  return (
    <div className="product">
      <div className="name">{name}</div>

      <Options
        label="Available sizes"
        options={sizes}
        selectedOption={selectedSize}
        setSelectedOption={setSelectedSize}
      />

      <Options
        label="Available Styles"
        options={styles}
        selectedOption={selectedStyle}
        setSelectedOption={setSelectedStyle}
      />
      <Options
        label="Available in"
        options={colors}
        selectedOption={selectedColor}
        setSelectedOption={setSelectedColor}
      />

      <div className="price">
        Price {(selectedStyle.price * selectedSize.price).toFixed(2)}
      </div>
      <img
        width={400}
        src={selectedColor.image}
        alt={`Image for the ${name}`}
      />
    </div>
  );
}
