import oscillatorB from './oscillatorB';
import deepFreeze from 'deep-freeze';

import { 
  oscBSetFreq, 
  oscBSetFine,
  oscBShapeToggleSawtooth,
  oscBShapeToggleTriangle,
  oscBShapeTogglePulse,
  oscBSetPulseWidth,
} from '../actions/oscillatorB';


it('sets Osc B frequency', () => {
  const stateBefore = oscillatorB();
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, frequency: 255 };
  expect(oscillatorB(stateBefore, oscBSetFreq(255)))
      .toEqual(stateAfter);
});

it('sets Osc B fine', () => {
  const stateBefore = oscillatorB();
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, fine: 255 };
  expect(oscillatorB(stateBefore, oscBSetFine(255)))
      .toEqual(stateAfter);
});

it('toggles Osc B shape sawtooth', () => {
  const stateBefore = oscillatorB();
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, sawtooth: !stateBefore.sawtooth };
  expect(oscillatorB(stateBefore, oscBShapeToggleSawtooth()))
      .toEqual(stateAfter);
});

it('toggles Osc B shape triangle', () => {
  const stateBefore = oscillatorB();
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, triangle: !stateBefore.triangle };
  expect(oscillatorB(stateBefore, oscBShapeToggleTriangle()))
      .toEqual(stateAfter);
});

it('toggles Osc B shape pulse', () => {
  const stateBefore = oscillatorB();
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, pulse: !stateBefore.pulse };
  expect(oscillatorB(stateBefore, oscBShapeTogglePulse()))
      .toEqual(stateAfter);
});

it('sets Osc B pulse width', () => {
  const stateBefore = oscillatorB();
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, pulseWidth: 255 };
  expect(oscillatorB(stateBefore, oscBSetPulseWidth(255)))
      .toEqual(stateAfter);
});
