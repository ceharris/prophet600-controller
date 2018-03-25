import React from "react";

export default ({ label, choices, selected, onChange }) => {
  return (
    <div>
      <label>{label}:</label>
      <select value={selected} onChange={onChange}>
        {
          choices.map(choice => (
            <option key={choice.key} value={choice.key}>
              {choice.label}
            </option>
          ))
        }
      </select>
    </div>
  );
  
};