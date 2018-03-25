import { connect } from "react-redux";
import { vcaEnvelopeSetDecay } from "../../actions/amplifier";

import Knob from "../Knob";

import {
  ENVELOPE_DECAY_MIN,
  ENVELOPE_DECAY_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.amplifier.decay, 
    label: "Delay",
    minValue: ENVELOPE_DECAY_MIN, 
    maxValue: ENVELOPE_DECAY_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcaEnvelopeSetDecay(event.target.value))
  })
)(Knob);
