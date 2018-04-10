import { connect } from "react-redux";

import TwoDigitControl from "../widgets/TwoDigitInput";
import * as PatchActions from "../../reducers/actions/patch";

export default connect(
    state => ({ 
      value: state.patch.selected,
    }),
    dispatch => ({
      onChange: (event) => dispatch(PatchActions.patchSelectionSet(event.value)),
    }),
)(TwoDigitControl);


