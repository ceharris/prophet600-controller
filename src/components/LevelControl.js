import { connect } from "react-redux";

import LevelKnob from "./LevelKnob";
import Parameters from "../parameters/parameters";
import { synthState } from "../reducers/reducers";

import { 
  synthSelectKnob, 
  synthDeselectKnob, 
  synthChangeLevel, 
  synthIncrLevel,
  synthDecrLevel,
} from "../reducers/actions/synth";

export default (parameterName) => {
  const parameter = Parameters.get(parameterName);
  return connect(
    state => ({ 
      level: parameter.getState(synthState(state)),
      min: parameter.min,
      max: parameter.max,
      zero: parameter.zero,
    }),
    dispatch => ({
      onActivate: () => dispatch(synthSelectKnob(parameter)),
      onDeactivate: () => dispatch(synthDeselectKnob(parameter)),
      onChange: (event) => dispatch(synthChangeLevel(parameter, event.percentRotation)),
      onClick: (event) => dispatch(event.altKey ? 
          synthDecrLevel(parameter) : synthIncrLevel(parameter)),
    }),
  )(LevelKnob);
} 


