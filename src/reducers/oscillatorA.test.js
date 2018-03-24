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

  expect(oscillatorA(stateBefore, oscASetFreq(255)))
      .toEqual({ ...stateBefore, frequency: 255 });
  expect(oscillatorA(stateBefore, oscASetFreq(0)))
      .toEqual({ ...stateBefore, frequency: 0 });
});

it('toggles Osc A sync', () => {
  const stateBefore = oscillatorA();
  deepFreeze(stateBefore);

  expect(oscillatorA(stateBefore, oscAToggleSync()))
      .toEqual({ ...stateBefore, sync: !stateBefore.sync });
});

it('toggles Osc A shape sawtooth', () => {
  const stateBefore = oscillatorA();
  deepFreeze(stateBefore);

  expect(oscillatorA(stateBefore, oscAShapeToggleSawtooth()))
      .toEqual({ ...stateBefore, sawtooth: !stateBefore.sawtooth });
});

it('toggles Osc A shape triangle', () => {
  const stateBefore = oscillatorA();
  deepFreeze(stateBefore);

  expect(oscillatorA(stateBefore, oscAShapeToggleTriangle()))
      .toEqual({ ...stateBefore, triangle: !stateBefore.triangle });
});

it('toggles Osc A shape pulse', () => {
  const stateBefore = oscillatorA();
  deepFreeze(stateBefore);

  expect(oscillatorA(stateBefore, oscAShapeTogglePulse()))
      .toEqual({ ...stateBefore, pulse: !stateBefore.pulse });
});

it('sets Osc A pulse width', () => {
  const stateBefore = oscillatorA();
  deepFreeze(stateBefore);

  expect(oscillatorA(stateBefore, oscASetPulseWidth(255)))
      .toEqual({ ...stateBefore, pulseWidth: 255 });
  expect(oscillatorA(stateBefore, oscASetPulseWidth(0)))
      .toEqual({ ...stateBefore, pulseWidth: 0 });
});
