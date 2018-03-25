import React from "react";
import BendWheelTarget from "./BendWheelTarget";
import BendWheelRange from "./BendWheelRange";
import ModWheelTarget from "./ModWheelTarget";
import ModWheelRange from "./ModWheelRange";
import KeyboardGlide from "./KeyboardGlide";
import KeyAssignMode from "./KeyAssignMode";

export default () => (
  <div className="performance-panel control-group">
    <h1>Performance</h1>
    <div className="control-subgroup">
      <h2>Bend Wheel</h2>
      <BendWheelTarget/>
      <BendWheelRange/>
    </div>
    <div className="control-subgroup">
      <h2>Mod Wheel</h2>
      <ModWheelTarget/>
      <ModWheelRange/>
    </div>
    <div className="control-subgroup">
      <h2>Keyboard</h2>
      <KeyboardGlide/>
      <KeyAssignMode/>
    </div>
  </div>
);

