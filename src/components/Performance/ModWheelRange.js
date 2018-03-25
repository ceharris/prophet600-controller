import { connect } from "react-redux";
import { modWheelSetRange } from "../../actions/performance";

import Selector from "../Selector";

import { MOD_WHEEL_RANGE_CHOICES } from "../../constants";

export default connect(
  state => ({ 
    label: "Range",
    selected: state.performance.modWheelRange, 
    choices: MOD_WHEEL_RANGE_CHOICES,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(modWheelSetRange(event.target.value))
  })
)(Selector);
