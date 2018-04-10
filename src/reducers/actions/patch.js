import * as Names from "./names";

export const patchSelectionSet = (selection) => ({
  type: Names.PATCH_SELECTION_SET,
  payload: {
    selection,
  }
});

export const patchSelectionIncr = () => ({
  type: Names.PATCH_SELECTION_INCR,
});

export const patchSelectionDecr = () => ({
  type: Names.PATCH_SELECTION_INCR,
});

export const patchSetName = (name) => ({
  type: Names.PATCH_SET_NAME,
  payload: {
    name,
  }
});

export const patchSaveSynth = () => ({
  type: Names.PATCH_SAVE_SYNTH,
});

export const patchStoreData = (patchNumber, data) => ({
  type: Names.PATCH_STORE_DATA,
  payload: {
    patchNumber,
    data,
  }
});
