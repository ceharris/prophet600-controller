import React from "react";
import Knob from "./Knob";

export default ({ level, min, max, onClick, onActivate, onDeactivate, onChange }) => {
  let text = "!!!" + level;
  if (level !== undefined) {
    text = text.substring(text.length - 3);
  }
  else {
    text = "udf";
  }
  return (
    <Knob percentRotation={(level - min) / (max - min + 1)} onClick={onClick}
        onActivate={onActivate} onDeactivate={onDeactivate} onChange={onChange}>
      <rect className="display-box" x="-30" y="-15" rx="5" ry="5" width="60" height="32"/>
      <g transform="scale(1 -1)">
        <text className="display display-bg" alignmentBaseline="middle" textAnchor="middle" x="0" y="0">888</text>
        <text className="display" alignmentBaseline="middle" textAnchor="middle" x="0" y="0">{text}</text>
      </g>
    </Knob>
  );
}

