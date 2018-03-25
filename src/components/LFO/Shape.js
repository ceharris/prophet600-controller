import { connect } from "react-redux";
import { lfoSetShape } from "../../actions/lfo";

import Selector from "../Selector";

import { LFO_SHAPE_CHOICES } from "../../constants";

export default connect(
  state => ({ 
    label: "Shape",
    selected: state.lfo.shape, 
    choices: LFO_SHAPE_CHOICES,
  }),
  dispatch => ({ 
    onChange: (event) => dispatch(lfoSetShape(event.target.value))
  })
)(Selector);
