import Parameters from "../parameters/defs";

import {
  SYNTH_TOGGLE_FLAG,
  SYNTH_SET_LEVEL,
  SYNTH_SET_CHOICE,
  SYNTH_SELECT_KNOB,
  SYNTH_DESELECT_KNOB,
  SYNTH_NEXT_CHOICE,
} from "../actions/names";

const defaultState = {
  ...Parameters.defaultState(),
  ui: null,
}

const reduceSelectKnob = (state, payload) => ({
  ...state,
  ui: {
    selected: {
      [payload.parameter.group]: {
        [payload.parameter.name]: state[payload.parameter.group][payload.parameter.name]
      }
    }
  }
});

const reduceDeselectKnob = (state, payload) => ({
  ...state,
  ui: null,
});

const reduceToggleFlag = (state, payload) => ({
  ...state, 
  [payload.parameter.group]: {
    ...state[payload.parameter.group],
    [payload.parameter.name]: !state[payload.parameter.group][payload.parameter.name],
  },
});

const reduceSetLevel = (state, payload) => {
  if (state.ui === null) return state;
  const parameter = payload.parameter;
  const origLevel = state.ui.selected[parameter.group][parameter.name];
  const change = (parameter.max - parameter.min + 1) * payload.change;
  const level = Math.max(Math.min(
      Math.round(origLevel + change), parameter.max), parameter.min);
  return ({
    ...state,
    [payload.parameter.group]: {
      ...state[payload.parameter.group],
      [payload.parameter.name]: level,
    }
  });
};

const reduceSetChoice = (state, payload) => {
  if (state.ui === null) return state;
  const parameter = payload.parameter;
  const origChoice = state.ui.selected[parameter.group][parameter.name];
  const origIndex = parameter.choices.indexOf(origChoice);
  const change = parameter.choices.length * payload.change;
  const index = Math.max(Math.min(
      Math.round(origIndex + change), parameter.choices.length - 1), 0);
  const selected = parameter.choices[index];
  return ({
    ...state,
    [payload.parameter.group]: {
      ...state[payload.parameter.group],
      [payload.parameter.name]: selected,
    }
  });
};

const reduceNextChoice = (state, payload) => {
  const parameter = payload.parameter;
  const selected = state[parameter.group][parameter.name];
  const index = (parameter.choices.indexOf(selected) + 1) 
              % parameter.choices.length;
  
  const newSelected = parameter.choices[index];

  return ({
    ...state,
    [payload.parameter.group]: {
      ...state[payload.parameter.group],
      [payload.parameter.name]: newSelected,
    }
  });  
}

export default (state = defaultState, action) => {
  if (!action) return state;
  if (action.payload === undefined) return state;

  switch (action.type) {
    case SYNTH_TOGGLE_FLAG:
      return reduceToggleFlag(state, action.payload);

    case SYNTH_SELECT_KNOB:
      return reduceSelectKnob(state, action.payload);

    case SYNTH_DESELECT_KNOB:
      return reduceDeselectKnob(state, action.payload);

    case SYNTH_SET_LEVEL:
      return reduceSetLevel(state, action.payload);

    case SYNTH_SET_CHOICE:
      return reduceSetChoice(state, action.payload);

    case SYNTH_NEXT_CHOICE:
      return reduceNextChoice(state, action.payload);
      
    default:
      return state;
  }
};
