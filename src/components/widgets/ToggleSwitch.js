import React from "react";

const BULB_OFF_GRADIENT = "g-toggle-led-bulb-off";
const BULB_ON_GRADIENT = "g-toggle-led-bulb-on";

export default  ({ isOn, onChange }) => (
  <svg className="toggle" viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="g-toggle-led-bulb-off">
        <stop className="stop0" offset="0"/>
        <stop className="stop1" offset="1"/>
      </radialGradient>
      <radialGradient id="g-toggle-led-bulb-on">
        <stop className="stop0" offset="0"/>
        <stop className="stop1" offset="1"/>
      </radialGradient>
      <radialGradient id="g-toggle-led-glint">
        <stop className="stop0" offset="0"/>
        <stop className="stop1" offset="0.6"/>
        <stop className="stop2" offset="1"/>
      </radialGradient>
    </defs>
    <g onClick={onChange}>
      <polygon className="toggle-side" points="19,69 12,62 12,12 5,5 5,155 19,141"/>
      <polygon className="toggle-side" points="101,69 108,62 108,7 115,5 115,155 101,141"/>
      <polygon className="toggle-top" points="5,5 12,12 108,12 115,5"/>
      <polygon className="toggle-top" points="19,69 12,62 108,62 101,69"/>
      <polygon className="toggle-bottom" points="5,155 19,141 101,141 115,155"/>
      <rect className="toggle-face" x="19" y="69" width="82" height="72"/>
      <rect className="toggle-face" x="12" y="12" width="96" height="50"/>
      <rect className="toggle-outline" x="5" y="5" width="110" height="150"/>
      <ellipse className="toggle-led-ring" cx="60" cy="37" rx="18" ry="18"/>
      <ellipse className="toggle-led-bulb" cx="60" cy="37" rx="15" ry="15"
          style={{fill: `url(#${isOn ? BULB_ON_GRADIENT : BULB_OFF_GRADIENT})`}}/>
      <ellipse className="toggle-led-glint" cx="58" cy="35" rx="15" ry="15"/>
    </g>
  </svg>
);
