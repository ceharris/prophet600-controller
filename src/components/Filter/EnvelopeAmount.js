import { connect } from "react-redux";
import { vcfSetEnvelopeAmount } from "../../actions/filter";

import Knob from "../Knob";

import {
  VCF_ENVELOPE_AMOUNT_MIN,
  VCF_ENVELOPE_AMOUNT_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.filter.envelopeAmount, 
    label: "Envelope Amount",
    minValue: VCF_ENVELOPE_AMOUNT_MIN, 
    maxValue: VCF_ENVELOPE_AMOUNT_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcfSetEnvelopeAmount(event.target.value))
  })
)(Knob);
