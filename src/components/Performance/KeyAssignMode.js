import { connect } from "react-redux";
import { keyboardSetKeyAssign } from "../../actions/performance";

import Selector from "../Selector";

import { KEY_ASSIGN_CHOICES } from "../../constants";

export default connect(
  state => ({ 
    label: "Key Assign",
    selected: state.performance.keyboardKeyAssign, 
    choices: KEY_ASSIGN_CHOICES,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(keyboardSetKeyAssign(event.target.value))
  })
)(Selector);
