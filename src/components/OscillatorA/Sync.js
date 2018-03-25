import { connect } from "react-redux";
import { oscAToggleSync } from "../../actions/oscillatorA";

import ToggleSwitch from "../ToggleSwitch";

export default connect(
  state => ({ 
    label: "Sync",
    value: state.oscillatorA.sync, 
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(oscAToggleSync())
  })
)(ToggleSwitch);
