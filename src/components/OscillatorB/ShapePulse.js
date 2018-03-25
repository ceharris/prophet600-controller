import { connect } from "react-redux";
import { oscBShapeTogglePulse } from "../../actions/oscillatorB";

import ToggleSwitch from "../ToggleSwitch";

export default connect(
  state => ({ 
    label: "Pulse",
    value: state.oscillatorB.shapePulse, 
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(oscBShapeTogglePulse())
  })
)(ToggleSwitch);
