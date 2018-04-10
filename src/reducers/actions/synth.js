import * as Names from "./names";

export const synthSelectKnob = (parameter) => ({
  type: Names.SYNTH_UI_SELECT_KNOB,
  payload: {
    parameter,
  }
});

export const synthDeselectKnob = (parameter) => ({
  type: Names.SYNTH_UI_DESELECT_KNOB,
  payload: {
    parameter,
  }
});

export const synthSetFlag = (parameter, flag) => ({
  type: Names.SYNTH_SET_FLAG,
  payload: {
    parameter,
    flag,
  },
});

export const synthSetLevel = (parameter, level) => ({
  type: Names.SYNTH_SET_LEVEL,
  payload: {
    parameter,
    level,
  },
});

export const synthSetChoice = (parameter, selected) => ({
  type: Names.SYNTH_SET_CHOICE,
  payload: {
    parameter,
    selected,
  },
});

export const synthSetData = (parameter, data) => ({
  type: Names.SYNTH_SET_DATA,
  payload: {
    parameter,
    data,
  },
});


export const synthToggleFlag = (parameter) => ({
  type: Names.SYNTH_TOGGLE_FLAG,
  payload: {
    parameter,
  },
});

export const synthChangeLevel = (parameter, change) => ({
  type: Names.SYNTH_CHANGE_LEVEL,
  payload: {
    parameter,
    change,
  }
});

export const synthIncrLevel = (parameter) => ({
  type: Names.SYNTH_INCR_LEVEL,
  payload: {
    parameter,
  }
});

export const synthDecrLevel = (parameter) => ({
  type: Names.SYNTH_DECR_LEVEL,
  payload: {
    parameter,
  }
});

export const synthChangeChoice = (parameter, change) => ({
  type: Names.SYNTH_CHANGE_CHOICE,
  payload: {
    parameter,
    change,
  }
});

export const synthNextChoice = (parameter) => ({
  type: Names.SYNTH_NEXT_CHOICE,
  payload: {
    parameter,
  }
});

export const synthPrevChoice = (parameter) => ({
  type: Names.SYNTH_PREV_CHOICE,
  payload: {
    parameter,
  }
});
