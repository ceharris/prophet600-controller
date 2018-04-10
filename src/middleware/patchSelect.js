import * as Actions from "../reducers/actions/names";
import MIDI from "../midi/MIDI";
import { configureSynthParameters } from "../patches/patch";

export default ({ dispatch, getState }) => next => action => {
  
  const result = next(action);
  if (action.type.startsWith(Actions.PATCH_SELECTION)) {
    const patchState = getState().patch;
    const patch = patchState.bank[patchState.selected].data;

    configureSynthParameters(patch, dispatch);
    MIDI.programChange(patchState.selected);
  }

  return result;
};