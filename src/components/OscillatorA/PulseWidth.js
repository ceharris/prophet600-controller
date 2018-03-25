import { connect } from "react-redux";
import { oscASetPulseWidth } from "../../actions/oscillatorA";

import Knob from "../Knob";

import {
  OSC_PULSE_WIDTH_MIN,
  OSC_PULSE_WIDTH_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.oscillatorA.pulseWidth, 
    label: "Pulse Width",
    minValue: OSC_PULSE_WIDTH_MIN, 
    maxValue: OSC_PULSE_WIDTH_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(oscASetPulseWidth(event.target.value))
  })
)(Knob);
