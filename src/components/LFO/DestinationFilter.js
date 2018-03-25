import { connect } from "react-redux";
import { lfoDestToggleFilter } from "../../actions/lfo";

import ToggleSwitch from "../ToggleSwitch";

export default connect(
  state => ({ 
    label: "Filter",
    value: state.lfo.destinationFilter, 
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(lfoDestToggleFilter
    ())
  })
)(ToggleSwitch);
