import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Pick a color</button>
      {showColorList && (
        <ul>
          {colors.map((color) => (
            <li
              key={color}
              onClick={() => handleColorClick(color)}
              style={{ backgroundColor: color }}
            />
          ))}
        </ul>
      )}
      {selectedColor && (
        <p>Selected color: <span style={{ color: selectedColor }}>{selectedColor}</span></p>
      )}
    </div>
  );
};

export default ColorPicker;
