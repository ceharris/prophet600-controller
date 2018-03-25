import { connect } from "react-redux";
import { lfoSetDelay } from "../../actions/lfo";

import Knob from "../Knob";

import {
  LFO_DELAY_MIN,
  LFO_DELAY_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.lfo.delay, 
    label: "Delay",
    minValue: LFO_DELAY_MIN,
    maxValue: LFO_DELAY_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(lfoSetDelay(event.target.value))
  })
)(Knob);
