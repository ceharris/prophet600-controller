import { connect } from "react-redux";
import { vcfEnvelopeSetDecay } from "../../actions/filter";

import Knob from "../Knob";

import {
  ENVELOPE_DECAY_MIN,
  ENVELOPE_DECAY_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.filter.decay, 
    label: "Delay",
    minValue: ENVELOPE_DECAY_MIN, 
    maxValue: ENVELOPE_DECAY_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcfEnvelopeSetDecay(event.target.value))
  })
)(Knob);
