import { connect } from "react-redux";
import { voicesToggleUnison } from "../../actions/voices";

import ToggleSwitch from "../ToggleSwitch";

export default connect(
  state => ({ 
    label: "Unison",
    value: state.voices.unison, 
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(voicesToggleUnison())
  })
)(ToggleSwitch);
