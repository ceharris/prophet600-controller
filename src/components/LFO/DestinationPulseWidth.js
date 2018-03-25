import { connect } from "react-redux";
import { lfoDestTogglePulseWidth } from "../../actions/lfo";

import ToggleSwitch from "../ToggleSwitch";

export default connect(
  state => ({ 
    label: "Pulse Width",
    value: state.lfo.destinationPW, 
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(lfoDestTogglePulseWidth())
  })
)(ToggleSwitch);
