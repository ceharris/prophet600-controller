import { connect } from "react-redux";
import { synthState } from "../reducers/reducers";

import SelectorKnob from "./SelectorKnob";
import Parameters from "../parameters/parameters";

import { 
  synthSelectKnob, 
  synthDeselectKnob, 
  synthChangeChoice,
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
      onChange: (event) => dispatch(synthChangeChoice(parameter, event.percentRotation)),
      onClick: (event) => dispatch(event.altKey ? 
          synthPrevChoice(parameter) : synthNextChoice(parameter)),
    }),
  )(SelectorKnob);
};


