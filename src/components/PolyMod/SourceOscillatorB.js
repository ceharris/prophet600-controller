import { connect } from "react-redux";
import { polymodSourceSetOscillatorB } from "../../actions/polymod";

import Knob from "../Knob";

import {
  POLYMOD_OSC_B_MIN,
  POLYMOD_OSC_B_MAX,
} from "../../constants";

export default connect(
  state => ({ 
    value: state.polymod.sourceOscB, 
    label: "Oscillator B",
    minValue: POLYMOD_OSC_B_MIN, 
    maxValue: POLYMOD_OSC_B_MAX,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(polymodSourceSetOscillatorB(event.target.value))
  })
)(Knob);
