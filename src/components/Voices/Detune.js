import { connect } from "react-redux";
import { voicesSetUnisonDetune } from "../../actions/voices";

import Knob from "../Knob";

import {
  UNISON_DETUNE_MIN,
  UNISON_DETUNE_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.voices.detune, 
    label: "Detune",
    minValue: UNISON_DETUNE_MIN, 
    maxValue: UNISON_DETUNE_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(voicesSetUnisonDetune(event.target.value))
  })
)(Knob);
