import { connect } from "react-redux";
import { vcaEnvelopeSetRate } from "../../actions/amplifier";

import Selector from "../Selector";

import { ENVELOPE_RATE_CHOICES } from "../../constants";

export default connect(
  state => ({ 
    label: "Rate",
    selected: state.amplifier.rate, 
    choices: ENVELOPE_RATE_CHOICES,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcaEnvelopeSetRate(event.target.value))
  })
)(Selector);
