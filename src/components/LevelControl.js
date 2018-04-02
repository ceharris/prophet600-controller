import { connect } from "react-redux";

import LevelKnob from "./LevelKnob";
import Parameters from "../parameters/defs";
import { synthState } from "../reducers/reducers";

import { 
  synthSelectKnob, 
  synthDeselectKnob, 
  synthSetLevel 
} from "../actions/synth";

export default (parameterName) => {
  const parameter = Parameters.get(parameterName);
  return connect(
    state => ({ 
      level: parameter.getState(synthState(state)),
      min: parameter.min,
      max: parameter.max,
    }),
    dispatch => ({
      onActivate: () => dispatch(synthSelectKnob(parameter)),
      onDeactivate: () => dispatch(synthDeselectKnob(parameter)),
      onChange: (event) => dispatch(synthSetLevel(parameter, event.percentRotation)),
    }),
  )(LevelKnob);
} 


