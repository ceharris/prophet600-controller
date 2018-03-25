import { connect } from "react-redux";
import { polymodSourceSetFilterEnv } from "../../actions/polymod";

import Knob from "../Knob";

import {
  POLYMOD_FILTER_ENV_MIN,
  POLYMOD_FILTER_ENV_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.polymod.sourceFilterEnv, 
    label: "Filter Env",
    minValue: POLYMOD_FILTER_ENV_MIN, 
    maxValue: POLYMOD_FILTER_ENV_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(polymodSourceSetFilterEnv(event.target.value))
  })
)(Knob);
