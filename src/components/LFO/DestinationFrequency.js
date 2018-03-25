import { connect } from "react-redux";
import { lfoDestToggleFreq } from "../../actions/lfo";

import ToggleSwitch from "../ToggleSwitch";

export default connect(
  state => ({ 
    label: "Frequency",
    value: state.lfo.destinationFreq, 
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(lfoDestToggleFreq())
  })
)(ToggleSwitch);
