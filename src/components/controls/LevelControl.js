import { connect } from "react-redux";

import LevelKnob from "../widgets/LevelKnob";
import Parameters from "../../synth/parameters";
import { synthState } from "../../reducers/reducers";
import * as Actions from "../../reducers/actions/synth";

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
      onActivate: () => dispatch(Actions.synthSelectKnob(parameter)),
      onDeactivate: () => dispatch(Actions.synthDeselectKnob(parameter)),
      onChange: (event) => dispatch(Actions.synthChangeLevel(parameter, event.percentRotation)),
      onClick: (event) => dispatch(event.altKey ? 
        Actions.synthDecrLevel(parameter) : Actions.synthIncrLevel(parameter)),
    }),
  )(LevelKnob);
} 


