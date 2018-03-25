import { connect } from "react-redux";
import { vcfEnvelopeSetSustain } from "../../actions/filter";

import Knob from "../Knob";

import {
  ENVELOPE_SUSTAIN_MIN,
  ENVELOPE_SUSTAIN_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.filter.sustain, 
    label: "Sustain",
    minValue: ENVELOPE_SUSTAIN_MIN, 
    maxValue: ENVELOPE_SUSTAIN_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcfEnvelopeSetSustain(event.target.value))
  })
)(Knob);
