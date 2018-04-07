import { connect } from "react-redux";
import { synthState } from "../../reducers/reducers";
import ToggleSwitch from "../widgets/ToggleSwitch";
import Parameters from "../../synth/parameters";
import * as Actions from "../../reducers/actions/synth";

export default (parameterName) => {
  const parameter = Parameters.get(parameterName);
  return connect(
    state => ({ 
      isOn: parameter.getState(synthState(state)),
    }),
    dispatch => ({
      onChange: () => dispatch(Actions.synthToggleFlag(parameter))
    }),
  )(ToggleSwitch);
};


