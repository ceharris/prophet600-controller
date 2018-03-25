import { connect } from "react-redux";
import { oscAShapeToggleSawtooth } from "../../actions/oscillatorA";

import ToggleSwitch from "../ToggleSwitch";

export default connect(
  state => ({ 
    label: "Triangle",
    value: state.oscillatorA.shapeTriangle, 
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(oscAShapeToggleSawtooth())
  })
)(ToggleSwitch);
