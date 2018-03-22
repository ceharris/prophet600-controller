import oscillatorA from './oscillatorA';
import deepFreeze from 'deep-freeze';

import { 
  oscASetFreq, 
  oscAToggleSync,
  oscAShapeToggleSawtooth,
  oscAShapeToggleTriangle,
  oscAShapeTogglePulse,
  oscASetPulseWidth,
} from '../actions/oscillatorA';


it('sets Osc A frequency', () => {
  const stateBefore = oscillatorA();
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, frequency: 255 };
  expect(oscillatorA(stateBefore, oscASetFreq(255)))
      .toEqual(stateAfter);
});

it('toggles Osc A sync', () => {
  const stateBefore = oscillatorA();
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, sync: !stateBefore.sync };
  expect(oscillatorA(stateBefore, oscAToggleSync()))
      .toEqual(stateAfter);
});

it('toggles Osc A shape sawtooth', () => {
  const stateBefore = oscillatorA();
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, sawtooth: !stateBefore.sawtooth };
  expect(oscillatorA(stateBefore, oscAShapeToggleSawtooth()))
      .toEqual(stateAfter);
});

it('toggles Osc A shape triangle', () => {
  const stateBefore = oscillatorA();
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, triangle: !stateBefore.triangle };
  expect(oscillatorA(stateBefore, oscAShapeToggleTriangle()))
      .toEqual(stateAfter);
});

it('toggles Osc A shape pulse', () => {
  const stateBefore = oscillatorA();
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, pulse: !stateBefore.pulse };
  expect(oscillatorA(stateBefore, oscAShapeTogglePulse()))
      .toEqual(stateAfter);
});

it('sets Osc A pulse width', () => {
  const stateBefore = oscillatorA();
  deepFreeze(stateBefore);

  const stateAfter = {...stateBefore, pulseWidth: 255 };
  expect(oscillatorA(stateBefore, oscASetPulseWidth(255)))
      .toEqual(stateAfter);
});
