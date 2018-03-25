import { connect } from "react-redux";
import { lfoSetRange } from "../../actions/lfo";

import Selector from "../Selector";

import { LFO_RANGE_CHOICES } from "../../constants";

export default connect(
  state => ({ 
    label: "Range",
    selected: state.lfo.range, 
    choices: LFO_RANGE_CHOICES,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(lfoSetRange(event.target.value))
  })
)(Selector);
