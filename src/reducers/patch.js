import * as Names from "./actions/names";

import {
  MIN_PATCH_NUMBER,
  PATCHES_PER_BANK,
  initBank,
} from "../patches/patch";

const defaultState = {
  selected: 0,
  bank: initBank(),
};

const reduceSelectionSet = (state, payload) => ({ 
  ...state, 
  selected: payload.selection,
});

const reduceSelectionIncr = (state, payload) => ({
  ...state, 
  selected: ((payload.selected + 1) % PATCHES_PER_BANK) + MIN_PATCH_NUMBER,
});

const reduceSelectionDecr = (state, payload) => ({
  ...state, 
  selected: ((payload.selected - 1) % PATCHES_PER_BANK) + MIN_PATCH_NUMBER,
});

const reduceSetName = (state, payload) => {
  const newState = { ...state };
  newState.bank[state.selected - PATCHES_PER_BANK].name = payload.name;
  return newState;
};

const reduceSaveSynth = (state, payload) => state;

const reduceStoreData = (state, payload) => {
  const newState = { ...state };
  newState.bank[payload.patchNumber - MIN_PATCH_NUMBER].data = payload.data;
  return newState;
};

export default (state = defaultState, action) => {
  if (!action) return state;
  switch (action.type) {
    case Names.PATCH_SELECTION_SET:
      return reduceSelectionSet(state, action.payload);
    
    case Names.PATCH_SELECTION_INCR:
      return reduceSelectionIncr(state, action.payload);
    
    case Names.PATCH_SELECTION_DECR:
      return reduceSelectionDecr(state, action.payload);
    
    case Names.PATCH_SET_NAME:
      return reduceSetName(state, action.payload);

    case Names.PATCH_SAVE_SYNTH:
      return reduceSaveSynth(state, action.payload);

    case Names.PATCH_STORE_DATA:
      return reduceStoreData(state, action.payload);
    
    default:
      return state;
  }
}