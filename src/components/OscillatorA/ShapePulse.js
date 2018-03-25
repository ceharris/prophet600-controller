import { connect } from "react-redux";
import { oscAShapeTogglePulse } from "../../actions/oscillatorA";

import ToggleSwitch from "../ToggleSwitch";

export default connect(
  state => ({ 
    label: "Pulse",
    value: state.oscillatorA.shapePulse, 
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(oscAShapeTogglePulse())
  })
)(ToggleSwitch);
