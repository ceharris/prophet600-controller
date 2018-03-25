import { connect } from "react-redux";
import { bendWheelSetTarget } from "../../actions/performance";

import Selector from "../Selector";

import { BEND_WHEEL_TARGET_CHOICES } from "../../constants";

export default connect(
  state => ({ 
    label: "Target",
    selected: state.performance.bendWheelTarget, 
    choices: BEND_WHEEL_TARGET_CHOICES,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(bendWheelSetTarget(event.target.value))
  })
)(Selector);
