import { connect } from "react-redux";
import { voicesSetFreqStep } from "../../actions/voices";

import Selector from "../Selector";

import { FREQ_STEP_CHOICES } from "../../constants";

export default connect(
  state => ({ 
    label: "Frequency Step",
    selected: state.voices.freqStep, 
    choices: FREQ_STEP_CHOICES,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(voicesSetFreqStep(event.target.value))
  })
)(Selector);
