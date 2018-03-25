import { connect } from "react-redux";
import { vcaEnvelopeSetSustain } from "../../actions/amplifier";

import Knob from "../Knob";

import {
  ENVELOPE_SUSTAIN_MIN,
  ENVELOPE_SUSTAIN_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.amplifier.sustain, 
    label: "Sustain",
    minValue: ENVELOPE_SUSTAIN_MIN, 
    maxValue: ENVELOPE_SUSTAIN_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcaEnvelopeSetSustain(event.target.value))
  })
)(Knob);
