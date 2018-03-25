import { connect } from "react-redux";
import { lfoSetDepth } from "../../actions/lfo";

import Knob from "../Knob";

import {
  LFO_DEPTH_MIN,
  LFO_DEPTH_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.lfo.depth, 
    label: "Initial Amount",
    minValue: LFO_DEPTH_MIN, 
    maxValue: LFO_DEPTH_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(lfoSetDepth(event.target.value))
  })
)(Knob);
