import React from "react";

export default ({ label, value, minValue, maxValue, onChange }) => {
  return (
    <div>
      <label>{label}:</label>
      <input type="range" min={minValue} max={maxValue}
            onChange={onChange} value={value} />
    </div>
  );
  
};