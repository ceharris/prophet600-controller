import React from "react";
import Knob from "./Knob";

const DISPLAY_WIDTH = 60;
const DISPLAY_HEIGHT = 32;
const DISPLAY_X = -(DISPLAY_WIDTH / 2);
const DISPLAY_Y = -(DISPLAY_HEIGHT / 2) + 1;

const ALL_ON = "~";
const ALL_OFF = "!";
const TEXT_WIDTH = 3;
const TEMPLATE_TEXT = ALL_ON.repeat(TEXT_WIDTH);
const BLANK_TEXT = ALL_OFF.repeat(TEXT_WIDTH);

export default ({ selected, choices, onActivate, onDeactivate, 
    onChange, onClick }) => {
  let rotation = 0;
  let text = BLANK_TEXT;
  if (Array.isArray(choices)) {
    const count = choices.length;
    const index = choices.indexOf(selected);
    if (index >= 0) {
      text = selected.substring(0, TEXT_WIDTH);
      if (text.length < TEXT_WIDTH) {
        text += ALL_OFF;
      }
      if (text.length < TEXT_WIDTH) {
        text = ALL_OFF + text;
      }
      rotation = (2*index + 1) / 2 / count;
    }
  }
  
  return (
    <Knob percentRotation={rotation} onClick={onClick}
        onActivate={onActivate} onDeactivate={onDeactivate} 
        onChange={onChange}>
      <rect className="display-box" x={DISPLAY_X} y={DISPLAY_Y} rx="5" ry="5" 
          width={DISPLAY_WIDTH} height={DISPLAY_HEIGHT}/>
      <g transform="scale(1, -1)">
        <text className="display display-bg display-selector" 
            alignmentBaseline="middle" textAnchor="middle" x="0" y="0">
          {TEMPLATE_TEXT}
        </text>
        <text className="display display-selector" alignmentBaseline="middle" 
            textAnchor="middle" x="0" y="0">
          {text}
        </text>
      </g>
    </Knob>
  );
}

