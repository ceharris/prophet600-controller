import { connect } from "react-redux";
import { synthState } from "../../reducers/reducers";

import SelectorKnob from "../widgets/SelectorKnob";
import Parameters from "../../synth/parameters";

import * as Actions from "../../reducers/actions/synth";

export default (parameterName) => {
  const parameter = Parameters.get(parameterName);
  return connect(
    state => ({ 
      selected: parameter.getState(synthState(state)),
      choices: parameter.choices,
    }),
    dispatch => ({
      onActivate: () => dispatch(Actions.synthSelectKnob(parameter)),
      onDeactivate: () => dispatch(Actions.synthDeselectKnob(parameter)),
      onChange: (event) => dispatch(Actions.synthChangeChoice(parameter, event.percentRotation)),
      onClick: (event) => dispatch(event.altKey ? 
        Actions.synthPrevChoice(parameter) : Actions.synthNextChoice(parameter)),
    }),
  )(SelectorKnob);
};


