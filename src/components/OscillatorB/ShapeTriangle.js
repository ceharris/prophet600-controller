import { connect } from "react-redux";
import { oscBShapeToggleTriangle } from "../../actions/oscillatorB";

import ToggleSwitch from "../ToggleSwitch";

export default connect(
  state => ({ 
    label: "Triangle",
    value: state.oscillatorB.shapeTriangle, 
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(oscBShapeToggleTriangle())
  })
)(ToggleSwitch);
