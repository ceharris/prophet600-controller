import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import midiControlChange from "./midiControlChange";
import patchSelect from "./patchSelect";

export default applyMiddleware(
  thunkMiddleware, 
  midiControlChange,
  patchSelect,
  createLogger({ collapsed: true }),
);