import { connect } from "react-redux";
import { bendWheelSetRange } from "../../actions/performance";

import Selector from "../Selector";

import { BEND_WHEEL_RANGE_CHOICES } from "../../constants";

export default connect(
  state => ({ 
    label: "Range",
    selected: state.performance.bendWheelRange, 
    choices: BEND_WHEEL_RANGE_CHOICES,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(bendWheelSetRange(event.target.value))
  })
)(Selector);
