import { connect } from "react-redux";
import { synthState } from "../reducers/reducers";

import SelectorKnob from "./SelectorKnob";
import Parameters from "../parameters/defs";

import { 
  synthSelectKnob, 
  synthDeselectKnob, 
  synthSetChoice,
  synthNextChoice, 
} from "../actions/synth";

const handleChange = (dispatch, parameter, event) => {
  console.log(`change ${parameter.group}.${parameter.name}: (${event.knobX} ${event.knobY}) 𝜃=${event.rotation.toPrecision(7)}° 𝜌=${event.percentRotation.toPrecision(7)}`);
  dispatch(synthSetChoice(parameter, event.percentRotation));
};

export default (parameterName) => {
  const parameter = Parameters.get(parameterName);
  return connect(
    state => ({ 
      selected: parameter.getState(synthState(state)),
      choices: parameter.choices,
    }),
    dispatch => ({
      onClick: () => dispatch(synthNextChoice(parameter)),
      onActivate: () => dispatch(synthSelectKnob(parameter)),
      onDeactivate: () => dispatch(synthDeselectKnob(parameter)),
      onChange: (event) => handleChange(dispatch, parameter, event),
    }),
  )(SelectorKnob);
};


