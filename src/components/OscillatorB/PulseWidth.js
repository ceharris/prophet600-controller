import { connect } from "react-redux";
import { oscBSetPulseWidth } from "../../actions/oscillatorB";

import Knob from "../Knob";

import {
  OSC_PULSE_WIDTH_MIN,
  OSC_PULSE_WIDTH_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.oscillatorB.pulseWidth, 
    label: "Pulse Width",
    minValue: OSC_PULSE_WIDTH_MIN, 
    maxValue: OSC_PULSE_WIDTH_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(oscBSetPulseWidth(event.target.value))
  })
)(Knob);
