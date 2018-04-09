import React from "react";
import Knob from "./Knob";

const DISPLAY_WIDTH = 70;
const DISPLAY_HEIGHT = 32;
const DISPLAY_X = -(DISPLAY_WIDTH / 2);
const DISPLAY_Y = -(DISPLAY_HEIGHT / 2) + 1;

const PRECISION = 3;
const SCALE = 1;
const TEMPLATE_TEXT = 
    (Number("8".repeat(PRECISION + 1)) / Math.pow(10, SCALE)).toFixed(SCALE);

const textForScaledLevel = (scaledLevel, scaledZero) => {
  const displayLevel = scaledLevel - scaledZero;
  if (displayLevel === undefined) return "!Udf!";
  if (Number.isNaN(displayLevel)) return "!NaN!";
  const value = (Math.round(displayLevel * Math.pow(10, PRECISION))
      * 1/Math.pow(10, SCALE)).toFixed(SCALE);
  const text = "!!!!!" + value;
  return text.substring(text.length - 5);    
};

export default ({ level, min, max, zero, 
    onClick, onActivate, onDeactivate, onChange }) => {
  const scaledLevel = level === max ? 1.0 : level / (max - min + 1);
  const scaledZero = zero / (max - min + 1);
  const text = textForScaledLevel(scaledLevel, scaledZero);
  return (
    <Knob percentRotation={scaledLevel} onClick={onClick}
        onActivate={onActivate} onDeactivate={onDeactivate} onChange={onChange}>
      <rect className="display-box" x={DISPLAY_X} y={DISPLAY_Y} rx="5" ry="5" 
          width={DISPLAY_WIDTH} height={DISPLAY_HEIGHT}/>
      <g transform="scale(1, -1)">
        <text className="display display-bg" alignmentBaseline="middle" 
            textAnchor="middle" x="0" y="0">{TEMPLATE_TEXT}</text>
        <text className="display" alignmentBaseline="middle" 
            textAnchor="middle" x="0" y="0">{text}</text>
      </g>
    </Knob>
  );
}

