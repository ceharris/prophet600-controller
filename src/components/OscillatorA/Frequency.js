import { connect } from "react-redux";
import { oscASetFrequency } from "../../actions/oscillatorA";

import Knob from "../Knob";

import {
  OSC_FREQUENCY_MIN,
  OSC_FREQUENCY_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.oscillatorA.frequency, 
    label: "Frequency",
    minValue: OSC_FREQUENCY_MIN, 
    maxValue: OSC_FREQUENCY_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(oscASetFrequency(event.target.value))
  })
)(Knob);
