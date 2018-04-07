/**
 * Controller assignments for the Prophet 600 GliGli.
 */

import Parameters from "../parameters/parameters";

import {
  POLYMOD_SOURCE_FILTER_ENV,
  POLYMOD_SOURCE_OSCILLATOR_B,
  POLYMOD_DEST_FREQUENCY_A,
  POLYMOD_DEST_FILTER,
  LFO_FREQUENCY,
  LFO_RANGE,
  LFO_SHAPE,
  LFO_DEPTH,
  LFO_DELAY,
  LFO_DEST_TARGET,
  LFO_DEST_FREQUENCY,
  LFO_DEST_PULSE_WIDTH,
  LFO_DEST_FILTER,
  LFO_DEST_AMPLIFIER,
  VIBRATO_FREQUENCY,
  VIBRATO_DEPTH,
  UNISON_TRACK,
  UNISON_DETUNE,
  OSCILLATOR_A_FREQUENCY,
  OSCILLATOR_A_SYNC,
  OSCILLATOR_A_SHAPE_SAWTOOTH,
  OSCILLATOR_A_SHAPE_TRIANGLE,
  OSCILLATOR_A_SHAPE_PULSE,
  OSCILLATOR_A_PULSE_WIDTH,
  OSCILLATOR_B_FREQUENCY,
  OSCILLATOR_B_FINE,
  OSCILLATOR_B_SHAPE_SAWTOOTH,
  OSCILLATOR_B_SHAPE_TRIANGLE,
  OSCILLATOR_B_SHAPE_PULSE,
  OSCILLATOR_B_PULSE_WIDTH,
  MIXER_OSCILLATOR_A_LEVEL,
  MIXER_OSCILLATOR_B_LEVEL,
  FILTER_CUTOFF,
  FILTER_RESONANCE,
  FILTER_ENVELOPE_AMOUNT,
  FILTER_KEYBOARD_TRACK,
  FILTER_ENVELOPE_CURVE,
  FILTER_ENVELOPE_RATE,
  FILTER_ENVELOPE_ATTACK,
  FILTER_ENVELOPE_DECAY,
  FILTER_ENVELOPE_SUSTAIN,
  FILTER_ENVELOPE_RELEASE,
  FILTER_ENVELOPE_VELOCITY,
  AMPLIFIER_ENVELOPE_CURVE,
  AMPLIFIER_ENVELOPE_RATE,
  AMPLIFIER_ENVELOPE_ATTACK,
  AMPLIFIER_ENVELOPE_DECAY,
  AMPLIFIER_ENVELOPE_SUSTAIN,
  AMPLIFIER_ENVELOPE_RELEASE,
  AMPLIFIER_ENVELOPE_VELOCITY,
  PERFORMANCE_BEND_WHEEL_RANGE,
  PERFORMANCE_BEND_WHEEL_TARGET,
  PERFORMANCE_MOD_WHEEL_RANGE,
  PERFORMANCE_MOD_WHEEL_TARGET,
  PERFORMANCE_KEYBOARD_KEY_ASSIGN,
  PERFORMANCE_KEYBOARD_GLIDE,
  GLOBAL_FREQUENCY_STEP,
  GLOBAL_ARPEGGIATOR_CLOCK,
} from "../parameters/defs";

const CTRL_BITS = 7;
const CTRL_RANGE = 1 << CTRL_BITS;
const CTRL_MASK = CTRL_RANGE - 1;

const CC_BITS = 2*CTRL_BITS;
const CC_RANGE = 1 << CC_BITS;
const CC_MASK = CC_RANGE - 1;

class Controller {

  send(midi, state, parameter) {
    throw new Error("controller " + this + " doesn't implement send");
  }

}

class ContinuousController extends Controller {
  constructor(coarseId, fineId, bits) {
    super();
    this.coarseId = coarseId;
    this.fineId = fineId;
    this.bits = bits === undefined ? 
      CC_BITS : Math.min(CC_BITS, bits);
  }

  async send(midi, state, parameter) {
    const value = CC_RANGE * (parameter.toNumber(state) / parameter.range());
    const word = (value << (CC_BITS - this.bits)) & CC_MASK;
    await midi.controlChange(this.coarseId, (word >> CTRL_BITS) & CTRL_MASK);
    return midi.controlChange(this.fineId, word & CTRL_MASK);
  }
}

class StepController extends Controller {
  constructor(id, bits, transformer) {
    super();
    this.id = id;
    this.bits = bits === undefined ? 1 : bits;
    this.transformer = transformer !== undefined ? 
        transformer : (state, parameter) => parameter.toNumber(state);
  }

  async send(midi, state, parameter) {
    const value = this.transformer(state, parameter);
    return midi.controlChange(this.id, (value << (CTRL_BITS - this.bits)) & CTRL_MASK);
  }
}

export const lfoDestinationModeTransformer = (state) => {
  const target = Parameters.get(LFO_DEST_TARGET).toNumber(state);
  const frequency = Parameters.get(LFO_DEST_FREQUENCY).toNumber(state);
  const pulseWidth = Parameters.get(LFO_DEST_PULSE_WIDTH).toNumber(state);
  const filter = Parameters.get(LFO_DEST_FILTER).toNumber(state);
  const amplifier = Parameters.get(LFO_DEST_AMPLIFIER).toNumber(state);
  return (((target & 0x3) << 4)
       | ((pulseWidth & 0x1) << 3)
       | ((amplifier & 0x1) << 2)
       | ((filter & 0x1) << 1)
       | (frequency & 0x1))
       & 0x7f;
};

const controllers = {
  [POLYMOD_SOURCE_FILTER_ENV]:        new ContinuousController(34, 98),
  [POLYMOD_SOURCE_OSCILLATOR_B]:      new ContinuousController(35, 99),
  [POLYMOD_DEST_FREQUENCY_A]:         new StepController(55, 1),
  [POLYMOD_DEST_FILTER]:              new StepController(56, 1),
  [LFO_FREQUENCY]:                    new ContinuousController(36, 100),
  [LFO_RANGE]:                        new StepController(58, 1),
  [LFO_SHAPE]:                        new StepController(57, 3),
  [LFO_DEPTH]:                        new ContinuousController(37, 101),
  [LFO_DELAY]:                        new ContinuousController(41, 105),
  [LFO_DEST_TARGET]:                  new StepController(59, 5, lfoDestinationModeTransformer),
  [LFO_DEST_FREQUENCY]:               new StepController(59, 5, lfoDestinationModeTransformer),
  [LFO_DEST_PULSE_WIDTH]:             new StepController(59, 5, lfoDestinationModeTransformer),
  [LFO_DEST_FILTER]:                  new StepController(59, 5, lfoDestinationModeTransformer),
  [LFO_DEST_AMPLIFIER]:               new StepController(59, 5, lfoDestinationModeTransformer),
  [VIBRATO_FREQUENCY]:                new ContinuousController(42, 106),
  [VIBRATO_DEPTH]:                    new ContinuousController(43, 107),
  [UNISON_TRACK]:                     new StepController(65, 1),
  [UNISON_DETUNE]:                    new ContinuousController(44, 108),
  [OSCILLATOR_A_FREQUENCY]:           new ContinuousController(16, 80),
  [OSCILLATOR_A_SYNC]:                new StepController(54, 1),
  [OSCILLATOR_A_SHAPE_SAWTOOTH]:      new StepController(48, 1),
  [OSCILLATOR_A_SHAPE_TRIANGLE]:      new StepController(49, 1),
  [OSCILLATOR_A_SHAPE_PULSE]:         new StepController(50, 1),
  [OSCILLATOR_A_PULSE_WIDTH]:         new ContinuousController(18, 82),
  [OSCILLATOR_B_FREQUENCY]:           new ContinuousController(19, 83),
  [OSCILLATOR_B_FINE]:                new ContinuousController(22, 86),
  [OSCILLATOR_B_SHAPE_SAWTOOTH]:      new StepController(51, 1),
  [OSCILLATOR_B_SHAPE_TRIANGLE]:      new StepController(52, 1),
  [OSCILLATOR_B_SHAPE_PULSE]:         new StepController(53, 1),
  [OSCILLATOR_B_PULSE_WIDTH]:         new ContinuousController(21, 85),
  [MIXER_OSCILLATOR_A_LEVEL]:         new ContinuousController(17, 81),
  [MIXER_OSCILLATOR_B_LEVEL]:         new ContinuousController(20, 84),
  [FILTER_CUTOFF]:                    new ContinuousController(23, 87),
  [FILTER_RESONANCE]:                 new ContinuousController(24, 88),
  [FILTER_ENVELOPE_AMOUNT]:           new ContinuousController(25, 89),
  [FILTER_KEYBOARD_TRACK]:            new StepController(60, 2),
  [FILTER_ENVELOPE_CURVE]:            new StepController(61, 1),
  [FILTER_ENVELOPE_RATE]:             new StepController(62, 1),
  [FILTER_ENVELOPE_ATTACK]:           new ContinuousController(29, 93),
  [FILTER_ENVELOPE_DECAY]:            new ContinuousController(28, 92),
  [FILTER_ENVELOPE_SUSTAIN]:          new ContinuousController(27, 91),
  [FILTER_ENVELOPE_RELEASE]:          new ContinuousController(26, 90),
  [FILTER_ENVELOPE_VELOCITY]:         new ContinuousController(40, 104),
  [AMPLIFIER_ENVELOPE_CURVE]:         new StepController(63, 1),
  [AMPLIFIER_ENVELOPE_RATE]:          new StepController(64, 1),
  [AMPLIFIER_ENVELOPE_ATTACK]:        new ContinuousController(33, 97),
  [AMPLIFIER_ENVELOPE_DECAY]:         new ContinuousController(32, 96),
  [AMPLIFIER_ENVELOPE_SUSTAIN]:       new ContinuousController(31, 95),
  [AMPLIFIER_ENVELOPE_RELEASE]:       new ContinuousController(30, 94),
  [AMPLIFIER_ENVELOPE_VELOCITY]:      new ContinuousController(39, 103),
  [PERFORMANCE_BEND_WHEEL_RANGE]:     new StepController(64, 2),
  [PERFORMANCE_BEND_WHEEL_TARGET]:    new StepController(68, 2),
  [PERFORMANCE_MOD_WHEEL_RANGE]:      new StepController(69, 2),
  [PERFORMANCE_MOD_WHEEL_TARGET]:     new StepController(71, 1),
  [PERFORMANCE_KEYBOARD_KEY_ASSIGN]:  new StepController(66, 2),
  [PERFORMANCE_KEYBOARD_GLIDE]:       new ContinuousController(38, 102),
  [GLOBAL_FREQUENCY_STEP]:            new StepController(70, 2),
  [GLOBAL_ARPEGGIATOR_CLOCK]:         new ContinuousController(45, 109),
}

class Controllers {
  midi = undefined;

  send(state, parameter) {
    if (this.midi === undefined)  {
      console.log("MIDI unavailable");
    }
    
    const id = parameter.id;
    if (!id || !controllers[id]) return;
    controllers[id].send(this.midi, state, parameter).catch(err => console.log(err));
  }
}

export default new Controllers();
