import Parameters from "../parameters/parameters";

import {
  SYNTH_SET_FLAG,
  SYNTH_SET_LEVEL,
  SYNTH_SET_CHOICE,
  SYNTH_SET_DATA,
  SYNTH_TOGGLE_FLAG,
  SYNTH_CHANGE_LEVEL,
  SYNTH_INCR_LEVEL,
  SYNTH_DECR_LEVEL,
  SYNTH_CHANGE_CHOICE,
  SYNTH_UI_SELECT_KNOB,
  SYNTH_UI_DESELECT_KNOB,
  SYNTH_NEXT_CHOICE,
  SYNTH_PREV_CHOICE,
} from "../actions/names";

const defaultState = {
  ...Parameters.defaultState(),
  ui: null,
}

const reduceSetData = (state, payload) => ({
  ...state,
  [payload.parameter.group]: {
    ...state[payload.parameter.group],
    [payload.parameter.name]: payload.data,
  }
});

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

const flagChangeState = (state, parameter, flag) => ({
  ...state, 
  [parameter.group]: {
    ...state[parameter.group],
    [parameter.name]: flag,
  },
});

const reduceSetFlag = (state, payload) => {
  return flagChangeState(state, payload.parameter, payload.flag);
};

const reduceToggleFlag = (state, payload) => {
  return flagChangeState(state, payload.parameter, 
      !state[payload.parameter.group][payload.parameter.name]);
};

const levelChangeState = (state, parameter, level) => ({
  ...state,
  [parameter.group]: {
    ...state[parameter.group],
    [parameter.name]: level,
  }
});

const reduceSetLevel = (state, payload) => {
  return levelChangeState(state, payload.parameter, payload.level);
}

const reduceChangeLevel = (state, payload) => {
  if (state.ui === null) return state;
  const parameter = payload.parameter;
  const origLevel = state.ui.selected[parameter.group][parameter.name];
  const change = (parameter.max - parameter.min + 1) * payload.change;
  let level = Math.round(origLevel + change);
  if (Math.sign(level - origLevel) >= 0) {
    level = Math.min(parameter.max, level);
  }
  else {
    level = Math.max(parameter.min, level);
  }
  return levelChangeState(state, parameter, level);
};

const reduceIncrLevel = (state, payload) => {
  const parameter = payload.parameter;
  const level = Math.min(state[parameter.group][parameter.name] + 1,
      parameter.max);
  return levelChangeState(state, payload.parameter, level);
};

const reduceDecrLevel = (state, payload) => {
  const parameter = payload.parameter;
  const level = Math.max(state[parameter.group][parameter.name] - 1,
      parameter.min);
  return levelChangeState(state, payload.parameter, level);
};

const choiceChangeState = (state, parameter, selected) => ({
  ...state,
  [parameter.group]: {
    ...state[parameter.group],
    [parameter.name]: selected,
  }
});

const reduceSetChoice = (state, payload) => {
  return choiceChangeState(state, payload.parameter, payload.selected);
}

const reduceChangeChoice = (state, payload) => {
  if (state.ui === null) return state;
  const parameter = payload.parameter;
  const origChoice = state.ui.selected[parameter.group][parameter.name];
  const origIndex = parameter.choices.indexOf(origChoice);
  const change = parameter.choices.length * payload.change;
  const index = Math.max(Math.min(
      Math.round(origIndex + change), parameter.choices.length - 1), 0);
  const selected = parameter.choices[index];
  return choiceChangeState(state, parameter, selected);
};

const reduceNextChoice = (state, payload) => {
  const parameter = payload.parameter;
  const selected = state[parameter.group][parameter.name];
  const index = parameter.choices.indexOf(selected);
  const newIndex = index < parameter.choices.length - 1 ? index + 1 : 0;
  const newSelected = parameter.choices[newIndex];
  return choiceChangeState(state, parameter, newSelected);
}

const reducePrevChoice = (state, payload) => {
  const parameter = payload.parameter;
  const selected = state[parameter.group][parameter.name];
  const index = parameter.choices.indexOf(selected);
  const newIndex = index > 0 ? index - 1 : parameter.choices.length - 1;
  const newSelected = parameter.choices[newIndex];
  return choiceChangeState(state, parameter, newSelected);
}

export default (state = defaultState, action) => {
  if (!action) return state;
  if (action.payload === undefined) return state;

  switch (action.type) {
    case SYNTH_TOGGLE_FLAG:
      return reduceToggleFlag(state, action.payload);

    case SYNTH_UI_SELECT_KNOB:
      return reduceSelectKnob(state, action.payload);

    case SYNTH_UI_DESELECT_KNOB:
      return reduceDeselectKnob(state, action.payload);

    case SYNTH_SET_FLAG:
      return reduceSetFlag(state, action.payload);

    case SYNTH_SET_LEVEL:
      return reduceSetLevel(state, action.payload);

    case SYNTH_SET_CHOICE:
      return reduceSetChoice(state, action.payload);

    case SYNTH_SET_DATA:
      return reduceSetData(state, action.payload);

    case SYNTH_CHANGE_LEVEL:
      return reduceChangeLevel(state, action.payload);

    case SYNTH_INCR_LEVEL:
      return reduceIncrLevel(state, action.payload);
    
    case SYNTH_DECR_LEVEL:
      return reduceDecrLevel(state, action.payload);

    case SYNTH_CHANGE_CHOICE:
      return reduceChangeChoice(state, action.payload);

    case SYNTH_NEXT_CHOICE:
      return reduceNextChoice(state, action.payload);
    
    case SYNTH_PREV_CHOICE:
      return reducePrevChoice(state, action.payload);

    default:
      return state;
  }
};
