import { connect } from "react-redux";
import { oscBShapeToggleSawtooth } from "../../actions/oscillatorB";

import ToggleSwitch from "../ToggleSwitch";

export default connect(
  state => ({ 
    label: "Sawtooth",
    value: state.oscillatorB.shapeSawtooth, 
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(oscBShapeToggleSawtooth())
  })
)(ToggleSwitch);
