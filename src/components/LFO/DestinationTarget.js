import { connect } from "react-redux";
import { lfoDestSetTarget } from "../../actions/lfo";

import Selector from "../Selector";

import { LFO_DEST_TARGET_CHOICES } from "../../constants";

export default connect(
  state => ({ 
    label: "Target",
    selected: state.lfo.destinationTarget, 
    choices: LFO_DEST_TARGET_CHOICES,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(lfoDestSetTarget(event.target.value))
  })
)(Selector);
