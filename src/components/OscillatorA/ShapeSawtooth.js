import { connect } from "react-redux";
import { oscAShapeToggleSawtooth } from "../../actions/oscillatorA";

import ToggleSwitch from "../ToggleSwitch";

export default connect(
  state => ({ 
    label: "Sawtooth",
    value: state.oscillatorA.shapeSawtooth, 
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(oscAShapeToggleSawtooth())
  })
)(ToggleSwitch);
