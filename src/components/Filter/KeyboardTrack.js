import { connect } from "react-redux";
import { vcfSetKeyboardTrack } from "../../actions/filter";

import Selector from "../Selector";

import { KEYBOARD_TRACK_CHOICES } from "../../constants";

export default connect(
  state => ({ 
    label: "Keyboard Track",
    selected: state.filter.keyboardTrack, 
    choices: KEYBOARD_TRACK_CHOICES,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(vcfSetKeyboardTrack(event.target.value))
  })
)(Selector);
