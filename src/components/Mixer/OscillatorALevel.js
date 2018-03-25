import { connect } from "react-redux";
import { mixerSetOscALevel } from "../../actions/mixer";

import Knob from "../Knob";

import {
  MIXER_OSC_LEVEL_MIN,
  MIXER_OSC_LEVEL_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.mixer.oscALevel, 
    label: "Osc A Level",
    minValue: MIXER_OSC_LEVEL_MIN,
    maxValue: MIXER_OSC_LEVEL_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(mixerSetOscALevel(event.target.value))
  })
)(Knob);
