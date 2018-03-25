import { connect } from "react-redux";
import { vcfEnvelopeSetRate } from "../../actions/filter";

import Selector from "../Selector";

import { ENVELOPE_RATE_CHOICES } from "../../constants";

export default connect(
  state => ({ 
    label: "Rate",
    selected: state.filter.rate, 
    choices: ENVELOPE_RATE_CHOICES,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcfEnvelopeSetRate(event.target.value))
  })
)(Selector);
