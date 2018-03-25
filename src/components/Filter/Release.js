import { connect } from "react-redux";
import { vcfEnvelopeSetRelease } from "../../actions/filter";

import Knob from "../Knob";

import {
  ENVELOPE_RELEASE_MIN,
  ENVELOPE_RELEASE_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.filter.release, 
    label: "Release",
    minValue: ENVELOPE_RELEASE_MIN, 
    maxValue: ENVELOPE_RELEASE_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcfEnvelopeSetRelease(event.target.value))
  })
)(Knob);
