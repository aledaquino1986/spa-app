import React from "react";

export default function ColorOptions({
  colors,
  selectedColor,
  setSelectedColor
}) {
  return (
    <div className="colors options">
      Available in:
      {colors.map(color => {
        return (
          <span
            className={`option ${selectedColor === color ? "selected" : null}`}
            onClick={() => setSelectedColor(color)}
          >
            {color.name}
          </span>
        );
      })}
    </div>
  );
}
