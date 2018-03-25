import { connect } from "react-redux";
import { vcfSetResonance } from "../../actions/filter";

import Knob from "../Knob";

import {
  VCF_RESONANCE_MIN,
  VCF_RESONANCE_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.filter.resonance, 
    label: "Resonance",
    minValue: VCF_RESONANCE_MIN, 
    maxValue: VCF_RESONANCE_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcfSetResonance(event.target.value))
  })
)(Knob);
