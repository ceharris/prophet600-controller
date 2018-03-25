import { connect } from "react-redux";
import { modWheelSetTarget } from "../../actions/performance";

import Selector from "../Selector";

import { MOD_WHEEL_TARGET_CHOICES } from "../../constants";

export default connect(
  state => ({ 
    label: "Target",
    selected: state.performance.modWheelTarget, 
    choices: MOD_WHEEL_TARGET_CHOICES,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(modWheelSetTarget(event.target.value))
  })
)(Selector);
