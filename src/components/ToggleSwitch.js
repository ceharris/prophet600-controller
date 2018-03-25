import React from "react";

export default ({ label, value, onChange }) => (
    <div>
      <label>{label}:</label>
      <input type="checkbox" value={value} onClick={onChange} />
    </div>
);
