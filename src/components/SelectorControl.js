import { connect } from "react-redux";
import { synthState } from "../reducers/reducers";

import SelectorKnob from "./SelectorKnob";
import Parameters from "../parameters/defs";

import { 
  synthSelectKnob, 
  synthDeselectKnob, 
  synthSetChoice,
  synthNextChoice,
  synthPrevChoice, 
} from "../actions/synth";

export default (parameterName) => {
  const parameter = Parameters.get(parameterName);
  return connect(
    state => ({ 
      selected: parameter.getState(synthState(state)),
      choices: parameter.choices,
    }),
    dispatch => ({
      onActivate: () => dispatch(synthSelectKnob(parameter)),
      onDeactivate: () => dispatch(synthDeselectKnob(parameter)),
      onChange: (event) => dispatch(synthSetChoice(parameter, event.percentRotation)),
      onClick: (event) => dispatch(event.altKey ? 
          synthPrevChoice(parameter) : synthNextChoice(parameter)),
    }),
  )(SelectorKnob);
};


