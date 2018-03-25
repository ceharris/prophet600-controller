import { connect } from "react-redux";
import { vcaEnvelopeSetCurve } from "../../actions/amplifier";

import Selector from "../Selector";

import { ENVELOPE_CURVE_CHOICES } from "../../constants";

export default connect(
  state => ({ 
    label: "Curve",
    selected: state.amplifier.curve, 
    choices: ENVELOPE_CURVE_CHOICES,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcaEnvelopeSetCurve(event.target.value))
  })
)(Selector);
