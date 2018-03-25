import { connect } from "react-redux";
import { polymodDestToggleFrequencyA } from "../../actions/polymod";

import ToggleSwitch from "../ToggleSwitch";

export default connect(
  state => ({ 
    label: "Frequency A",
    value: state.lfo.destinationFreqA, 
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(polymodDestToggleFrequencyA())
  })
)(ToggleSwitch);
