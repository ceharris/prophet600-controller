import { connect } from "react-redux";
import { synthState } from "../reducers/reducers";
import { synthToggleFlag } from "../actions/synth";
import ToggleSwitch from "./ToggleSwitch";
import Parameters from "../parameters/parameters";

export default (parameterName) => {
  const parameter = Parameters.get(parameterName);
  return connect(
    state => ({ 
      isOn: parameter.getState(synthState(state)),
    }),
    dispatch => ({
      onChange: () => dispatch(synthToggleFlag(parameter))
    }),
  )(ToggleSwitch);
};


