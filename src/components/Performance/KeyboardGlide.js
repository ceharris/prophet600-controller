import { connect } from "react-redux";
import { keyboardSetGlide } from "../../actions/performance";

import Knob from "../Knob";

import {
  KEYBOARD_GLIDE_MIN,
  KEYBOARD_GLIDE_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.performance.keyboardGlide, 
    label: "Glide",
    minValue: KEYBOARD_GLIDE_MIN, 
    maxValue: KEYBOARD_GLIDE_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(keyboardSetGlide(event.target.value))
  })
)(Knob);
