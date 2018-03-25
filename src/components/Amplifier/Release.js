import { connect } from "react-redux";
import { vcaEnvelopeSetRelease } from "../../actions/amplifier";

import Knob from "../Knob";

import {
  ENVELOPE_RELEASE_MIN,
  ENVELOPE_RELEASE_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.amplifier.release, 
    label: "Release",
    minValue: ENVELOPE_RELEASE_MIN, 
    maxValue: ENVELOPE_RELEASE_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcaEnvelopeSetRelease(event.target.value))
  })
)(Knob);
