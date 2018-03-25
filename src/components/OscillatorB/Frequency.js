import { connect } from "react-redux";
import { oscBSetFrequency } from "../../actions/oscillatorB";

import Knob from "../Knob";

import {
  OSC_FREQUENCY_MIN,
  OSC_FREQUENCY_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.oscillatorB.frequency, 
    label: "Frequency",
    minValue: OSC_FREQUENCY_MIN, 
    maxValue: OSC_FREQUENCY_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(oscBSetFrequency(event.target.value))
  })
)(Knob);
