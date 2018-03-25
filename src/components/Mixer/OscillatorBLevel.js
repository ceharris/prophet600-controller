import { connect } from "react-redux";
import { mixerSetOscBLevel } from "../../actions/mixer";

import Knob from "../Knob";

import {
  MIXER_OSC_LEVEL_MIN,
  MIXER_OSC_LEVEL_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.mixer.oscBLevel, 
    label: "Osc B Level",
    minValue: MIXER_OSC_LEVEL_MIN,
    maxValue: MIXER_OSC_LEVEL_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(mixerSetOscBLevel(event.target.value))
  })
)(Knob);
