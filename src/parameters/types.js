/**
 * Synthesizer parameter types
 *
 * Every parameter for the synthesizer is one of three possible types; 
 * _flag_, _level_, _choice_. Each definition provides specifies the type 
 * along with relevant characteristics of the type.
 * @module types
 */

/** 
 * A _flag_ describes a parameter that can be either off or on and is generally
 * associated with a toggle switch control.
 */
export const PARAM_TYPE_FLAG = "flag";

/** 
 * A _level_ describes a parameter that has a numeric value over a continuous
 * range between a specified minimum and maximum. These parameters are associated
 * with a knob control that displays the current value as a number.
 */
export const PARAM_TYPE_LEVEL = "level";

/**
 * A _choice_ describes a parameter that is an enumeration of strings representing
 * the possible values. 
 */
export const PARAM_TYPE_CHOICE = "choice";

/**
 * A _data_ parameter stores raw programming data from the synthesizer. 
 * Parameters of this type do not have corresponding MIDI Control Change
 * messages; they are only relay to/from the synth via MIDI System Exclusive
 * messages.
 */
export const PARAM_TYPE_DATA = "data";