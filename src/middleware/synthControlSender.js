
import Controllers from "../midi/controllers";
import { synthState } from "../reducers/reducers";

export default ({ getState }) => next => action => {
  if (!action.type.startsWith("SYNTH_")) return next(action);
  if (action.type.startsWith("SYNTH_UI_")) return next(action);

  const result = next(action);
  Controllers.send(synthState(getState()), action.payload.parameter);
  return result;
};