import { connect } from "react-redux";
import { vcaEnvelopeSetAttack } from "../../actions/amplifier";

import Knob from "../Knob";

import {
  ENVELOPE_ATTACK_MIN,
  ENVELOPE_ATTACK_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.amplifier.attack, 
    label: "Attack",
    minValue: ENVELOPE_ATTACK_MIN, 
    maxValue: ENVELOPE_ATTACK_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcaEnvelopeSetAttack(event.target.value))
  })
)(Knob);
