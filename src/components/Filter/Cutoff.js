import { connect } from "react-redux";
import { vcfSetCutoff } from "../../actions/filter";

import Knob from "../Knob";

import {
  VCF_CUTOFF_MIN,
  VCF_CUTOFF_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.filter.cutoff, 
    label: "Cutoff",
    minValue: VCF_CUTOFF_MIN, 
    maxValue: VCF_CUTOFF_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcfSetCutoff(event.target.value))
  })
)(Knob);
