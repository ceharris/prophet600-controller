import { connect } from "react-redux";
import { vcfEnvelopeSetCurve } from "../../actions/filter";

import Selector from "../Selector";

import { ENVELOPE_CURVE_CHOICES } from "../../constants";

export default connect(
  state => ({ 
    label: "Curve",
    selected: state.filter.curve, 
    choices: ENVELOPE_CURVE_CHOICES,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcfEnvelopeSetCurve(event.target.value))
  })
)(Selector);
