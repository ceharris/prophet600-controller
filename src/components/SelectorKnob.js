import React from "react";
import Knob from "./Knob";

export default ({ selected, choices, onActivate, onDeactivate, 
    onChange, onClick }) => {
  let rotation = 0;
  let text = "!!!";
  if (Array.isArray(choices)) {
    const count = choices.length;
    const index = choices.indexOf(selected);
    if (index >= 0) {
      text = selected.substring(0, 3);
      if (text.length < 3) {
        text += "!";
      }
      if (text.length < 3) {
        text = "!" + text;
      }
      rotation = index / count;
    }
  }
  
  return (
    <Knob percentRotation={rotation} onClick={onClick}
        onActivate={onActivate} onDeactivate={onDeactivate} onChange={onChange}>
      <rect className="display-box" x="-30" y="-15" rx="5" ry="5" width="60" height="32"/>
      <g transform="scale(1 -1)">
        <text className="display display-bg display-selector" alignmentBaseline="middle" textAnchor="middle" x="0" y="0">888</text>
        <text className="display display-selector" alignmentBaseline="middle" textAnchor="middle" x="0" y="0">{text}</text>
      </g>
    </Knob>
  );
}

