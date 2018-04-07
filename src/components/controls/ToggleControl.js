import { connect } from "react-redux";
import { synthState } from "../../reducers/reducers";
import { synthToggleFlag } from "../../reducers/actions/synth";
import ToggleSwitch from "../widgets/ToggleSwitch";
import Parameters from "../../synth/parameters";

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


