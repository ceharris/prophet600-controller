import oscillatorB from './oscillatorB';
import deepFreeze from 'deep-freeze';

import { 
  oscBSetFrequency, 
  oscBSetFine,
  oscBShapeToggleSawtooth,
  oscBShapeToggleTriangle,
  oscBShapeTogglePulse,
  oscBSetPulseWidth,
} from '../actions/oscillatorB';


it('sets Osc B frequency', () => {
  const stateBefore = oscillatorB();
  deepFreeze(stateBefore);

  expect(oscillatorB(stateBefore, oscBSetFrequency(255)))
      .toEqual({ ...stateBefore, frequency: 255 });
  expect(oscillatorB(stateBefore, oscBSetFrequency(0)))
      .toEqual({ ...stateBefore, frequency: 0 });
});

it('sets Osc B fine', () => {
  const stateBefore = oscillatorB();
  deepFreeze(stateBefore);

  expect(oscillatorB(stateBefore, oscBSetFine(255)))
      .toEqual({ ...stateBefore, fine: 255 });
  expect(oscillatorB(stateBefore, oscBSetFine(0)))
      .toEqual({ ...stateBefore, fine: 0 });
});

it('toggles Osc B shape sawtooth', () => {
  const stateBefore = oscillatorB();
  deepFreeze(stateBefore);

  expect(oscillatorB(stateBefore, oscBShapeToggleSawtooth()))
      .toEqual({ ...stateBefore, sawtooth: !stateBefore.sawtooth });
});

it('toggles Osc B shape triangle', () => {
  const stateBefore = oscillatorB();
  deepFreeze(stateBefore);

  expect(oscillatorB(stateBefore, oscBShapeToggleTriangle()))
      .toEqual({ ...stateBefore, triangle: !stateBefore.triangle });
});

it('toggles Osc B shape pulse', () => {
  const stateBefore = oscillatorB();
  deepFreeze(stateBefore);

  expect(oscillatorB(stateBefore, oscBShapeTogglePulse()))
      .toEqual({ ...stateBefore, pulse: !stateBefore.pulse });
});

it('sets Osc B pulse width', () => {
  const stateBefore = oscillatorB();
  deepFreeze(stateBefore);

  expect(oscillatorB(stateBefore, oscBSetPulseWidth(255)))
      .toEqual({ ...stateBefore, pulseWidth: 255 });
  expect(oscillatorB(stateBefore, oscBSetPulseWidth(0)))
      .toEqual({ ...stateBefore, pulseWidth: 0 });
});
