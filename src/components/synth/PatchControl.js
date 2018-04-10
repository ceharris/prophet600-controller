import React from "react";
import PatchSelectorControl from "../controls/PatchSelectorControl";

export default () => (
  <div id="patch-control" className="control-group no-border">
    <div style={{ gridRow: 2}} id="patch-select"><PatchSelectorControl/></div>
  </div>
);