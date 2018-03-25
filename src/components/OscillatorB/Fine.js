import { connect } from "react-redux";
import { oscBSetFine } from "../../actions/oscillatorB";

import Knob from "../Knob";

import {
  OSC_FINE_MIN,
  OSC_FINE_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.oscillatorB.fine, 
    label: "Fine",
    minValue: OSC_FINE_MIN, 
    maxValue: OSC_FINE_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(oscBSetFine(event.target.value))
  })
)(Knob);
