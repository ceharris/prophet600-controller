import { connect } from "react-redux";
import { lfoSetFrequency } from "../../actions/lfo";

import Knob from "../Knob";

import {
  LFO_FREQ_MIN,
  LFO_FREQ_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.lfo.frequency, 
    label: "Frequency",
    minValue: LFO_FREQ_MIN, 
    maxValue: LFO_FREQ_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(lfoSetFrequency(event.target.value))
  })
)(Knob);
