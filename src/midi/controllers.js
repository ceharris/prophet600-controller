/**
 * Controller assignments for the Prophet 600 GliGli.
 */

import Parameters from "../synth/parameters";
import * as Names from "../synth/names";

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
  const target = Parameters.get(Names.LFO_DEST_TARGET).toNumber(state);
  const frequency = Parameters.get(Names.LFO_DEST_FREQUENCY).toNumber(state);
  const pulseWidth = Parameters.get(Names.LFO_DEST_PULSE_WIDTH).toNumber(state);
  const filter = Parameters.get(Names.LFO_DEST_FILTER).toNumber(state);
  const amplifier = Parameters.get(Names.LFO_DEST_AMPLIFIER).toNumber(state);
  return (((target & 0x3) << 4)
       | ((pulseWidth & 0x1) << 3)
       | ((amplifier & 0x1) << 2)
       | ((filter & 0x1) << 1)
       | (frequency & 0x1))
       & 0x7f;
};

const controllers = {
  [Names.POLYMOD_SOURCE_FILTER_ENV]:        new ContinuousController(34, 98),
  [Names.POLYMOD_SOURCE_OSCILLATOR_B]:      new ContinuousController(35, 99),
  [Names.POLYMOD_DEST_FREQUENCY_A]:         new StepController(55, 1),
  [Names.POLYMOD_DEST_FILTER]:              new StepController(56, 1),
  [Names.LFO_FREQUENCY]:                    new ContinuousController(36, 100),
  [Names.LFO_RANGE]:                        new StepController(58, 1),
  [Names.LFO_SHAPE]:                        new StepController(57, 3),
  [Names.LFO_DEPTH]:                        new ContinuousController(37, 101),
  [Names.LFO_DELAY]:                        new ContinuousController(41, 105),
  [Names.LFO_DEST_TARGET]:                  new StepController(59, 5, lfoDestinationModeTransformer),
  [Names.LFO_DEST_FREQUENCY]:               new StepController(59, 5, lfoDestinationModeTransformer),
  [Names.LFO_DEST_PULSE_WIDTH]:             new StepController(59, 5, lfoDestinationModeTransformer),
  [Names.LFO_DEST_FILTER]:                  new StepController(59, 5, lfoDestinationModeTransformer),
  [Names.LFO_DEST_AMPLIFIER]:               new StepController(59, 5, lfoDestinationModeTransformer),
  [Names.VIBRATO_FREQUENCY]:                new ContinuousController(42, 106),
  [Names.VIBRATO_DEPTH]:                    new ContinuousController(43, 107),
  [Names.UNISON_TRACK]:                     new StepController(65, 1),
  [Names.UNISON_DETUNE]:                    new ContinuousController(44, 108),
  [Names.OSCILLATOR_A_FREQUENCY]:           new ContinuousController(16, 80),
  [Names.OSCILLATOR_A_SYNC]:                new StepController(54, 1),
  [Names.OSCILLATOR_A_SHAPE_SAWTOOTH]:      new StepController(48, 1),
  [Names.OSCILLATOR_A_SHAPE_TRIANGLE]:      new StepController(49, 1),
  [Names.OSCILLATOR_A_SHAPE_PULSE]:         new StepController(50, 1),
  [Names.OSCILLATOR_A_PULSE_WIDTH]:         new ContinuousController(18, 82),
  [Names.OSCILLATOR_B_FREQUENCY]:           new ContinuousController(19, 83),
  [Names.OSCILLATOR_B_FINE]:                new ContinuousController(22, 86),
  [Names.OSCILLATOR_B_SHAPE_SAWTOOTH]:      new StepController(51, 1),
  [Names.OSCILLATOR_B_SHAPE_TRIANGLE]:      new StepController(52, 1),
  [Names.OSCILLATOR_B_SHAPE_PULSE]:         new StepController(53, 1),
  [Names.OSCILLATOR_B_PULSE_WIDTH]:         new ContinuousController(21, 85),
  [Names.MIXER_OSCILLATOR_A_LEVEL]:         new ContinuousController(17, 81),
  [Names.MIXER_OSCILLATOR_B_LEVEL]:         new ContinuousController(20, 84),
  [Names.FILTER_CUTOFF]:                    new ContinuousController(23, 87),
  [Names.FILTER_RESONANCE]:                 new ContinuousController(24, 88),
  [Names.FILTER_ENVELOPE_AMOUNT]:           new ContinuousController(25, 89),
  [Names.FILTER_KEYBOARD_TRACK]:            new StepController(60, 2),
  [Names.FILTER_ENVELOPE_CURVE]:            new StepController(61, 1),
  [Names.FILTER_ENVELOPE_RATE]:             new StepController(62, 1),
  [Names.FILTER_ENVELOPE_ATTACK]:           new ContinuousController(29, 93),
  [Names.FILTER_ENVELOPE_DECAY]:            new ContinuousController(28, 92),
  [Names.FILTER_ENVELOPE_SUSTAIN]:          new ContinuousController(27, 91),
  [Names.FILTER_ENVELOPE_RELEASE]:          new ContinuousController(26, 90),
  [Names.FILTER_ENVELOPE_VELOCITY]:         new ContinuousController(40, 104),
  [Names.AMPLIFIER_ENVELOPE_CURVE]:         new StepController(63, 1),
  [Names.AMPLIFIER_ENVELOPE_RATE]:          new StepController(64, 1),
  [Names.AMPLIFIER_ENVELOPE_ATTACK]:        new ContinuousController(33, 97),
  [Names.AMPLIFIER_ENVELOPE_DECAY]:         new ContinuousController(32, 96),
  [Names.AMPLIFIER_ENVELOPE_SUSTAIN]:       new ContinuousController(31, 95),
  [Names.AMPLIFIER_ENVELOPE_RELEASE]:       new ContinuousController(30, 94),
  [Names.AMPLIFIER_ENVELOPE_VELOCITY]:      new ContinuousController(39, 103),
  [Names.PERFORMANCE_BEND_WHEEL_RANGE]:     new StepController(64, 2),
  [Names.PERFORMANCE_BEND_WHEEL_TARGET]:    new StepController(68, 2),
  [Names.PERFORMANCE_MOD_WHEEL_RANGE]:      new StepController(69, 2),
  [Names.PERFORMANCE_MOD_WHEEL_TARGET]:     new StepController(71, 1),
  [Names.PERFORMANCE_KEYBOARD_KEY_ASSIGN]:  new StepController(66, 2),
  [Names.PERFORMANCE_KEYBOARD_GLIDE]:       new ContinuousController(38, 102),
  [Names.GLOBAL_FREQUENCY_STEP]:            new StepController(70, 2),
  [Names.GLOBAL_ARPEGGIATOR_CLOCK]:         new ContinuousController(45, 109),
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
