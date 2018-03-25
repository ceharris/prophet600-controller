import { connect } from "react-redux";
import { vcfEnvelopeSetAttack } from "../../actions/filter";

import Knob from "../Knob";

import {
  ENVELOPE_ATTACK_MIN,
  ENVELOPE_ATTACK_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.filter.attack, 
    label: "Attack",
    minValue: ENVELOPE_ATTACK_MIN, 
    maxValue: ENVELOPE_ATTACK_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcfEnvelopeSetAttack(event.target.value))
  })
)(Knob);
