
class Parameter {
  constructor(id, group, name, init) {
    this.id = id;
    this.group = group;
    this.name = name;
    this.init = init;
  }

  getState(state) {
    return state[this.group][this.name];
  }

  toNumber(state) {
    throw new Error("parameter must implement toControllerValue");
  }

  toModelValue(controllerValue) {
    throw new Error("parameter must implement toModelValue");
  }

}

export class FlagParameter extends Parameter {
  constructor(id, group, name, init) {
    super(id, group, name, init !== undefined ? init : false);
  }

  toNumber(state) {
    return this.getState(state) ? 1 : 0;
  }

  toModelValue(number) {
    return number !== 0;
  }
}

export class LevelParameter extends Parameter {
  constructor (id, group, name, min, max, zero, init) {
    super(id, group, name);
    this.min = min;
    this.max = max;
    this.zero = zero !== undefined ? zero : 0;
    this.init = init !== undefined ? init : this.zero;
  }
  
  range() {
    return this.max - this.min + 1;
  }

  toNumber(state) {
    return this.getState(state);
  }

  toModelValue(number) {
    return number;
  }
}

export class ChoiceParameter extends Parameter {
  constructor (id, group, name, choices, init, toNumberFn,
      toModelValueFn) {
    super(id, group, name, init !== undefined ? init : choices[0]);
    this.choices = choices;
    this.toNumberFn = toNumberFn !== undefined ? 
      toNumberFn : (state, parameter) => {
                            const selected = state[parameter.group][parameter.name];
                            return parameter.choices.indexOf(selected);
                          };
    this.toModelValueFn = toModelValueFn !== undefined ? 
      toModelValueFn : (value, parameter) => parameter.choices[value];
  }

  toNumber(state) {
    return this.toNumberFn(state, this);
  }

  toModelValue(number) {
    return this.toModelValueFn(number, this);
  }

}

export class DataParameter extends Parameter {
  
  toModelValue(data) {
    return data;
  }

}
