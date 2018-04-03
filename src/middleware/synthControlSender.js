
import MIDI from "../midi/MIDI";
import { synthState } from "../reducers/reducers";

export default ({ getState }) => next => action => {
  if (!action.type.startsWith("SYNTH_")) return next(action);
  if (action.type.startsWith("SYNTH_UI_")) return next(action);

  const result = next(action);

  const parameter = action.payload.parameter;
  const controllerValue = parameter.toControllerValue(synthState(getState()));
  parameter.controller.send(MIDI, controllerValue);

  return result;
};