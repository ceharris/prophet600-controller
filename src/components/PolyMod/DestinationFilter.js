import { connect } from "react-redux";
import { polymodDestToggleFilter } from "../../actions/polymod";

import ToggleSwitch from "../ToggleSwitch";

export default connect(
  state => ({ 
    label: "Filter",
    value: state.lfo.destinationFilter, 
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(polymodDestToggleFilter())
  })
)(ToggleSwitch);
