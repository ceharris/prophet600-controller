import deepFreeze from "deep-freeze";
import Parameters from "../parameters/parameters";

import synth from "./synth";

import {
  synthToggleFlag,
  synthSetLevel,
  synthSetChoice,
} from "../actions/synth";

// it("sets all flag parameters", () => {
//   PARAM_NAMES.map(name => Parameters.get(name))
//       .filter(param => param.type === PARAM_TYPE_FLAG)
//       .forEach(param => {
//         const stateBefore = synth();
//         deepFreeze(stateBefore);
//         expect(synth(stateBefore, synthToggleFlag(param))).toEqual({
//           ...stateBefore,
//           [param.group]: {
//             ...stateBefore[param.group],
//             [param.name]: !stateBefore[param.group][param.name],
//           }
//         });
//       });
// });

// it("sets all level parameters", () => {
//   PARAM_NAMES.map(name => Parameters.get(name))
//       .filter(param => param.type === PARAM_TYPE_LEVEL)
//       .forEach(param => {
//         const stateBefore = synth();
//         deepFreeze(stateBefore);
//         expect(synth(stateBefore, synthSetLevel(param, -1))).toEqual({
//           ...stateBefore,
//           [param.group]: {
//             ...stateBefore[param.group],
//             [param.name]: -1,
//           }
//         });
//       });
// });

// it("sets all choice parameters", () => {
//   PARAM_NAMES.map(name => Parameters.get(name))
//       .filter(param => param.type === PARAM_TYPE_CHOICE)
//       .forEach(param => {
//         const choice0 = param.choices[0];
//         const choice1 = param.choices[param.choices.length - 1];
//         const stateBefore = synth();
//         deepFreeze(stateBefore);
//         expect(synth(stateBefore, synthSetChoice(param, choice1))).toEqual({
//           ...stateBefore,
//           [param.group]: {
//             ...stateBefore[param.group],
//             [param.name]: choice1,
//           }
//         });
//         expect(synth(stateBefore, synthSetLevel(param, choice0))).toEqual({
//           ...stateBefore,
//           [param.group]: {
//             ...stateBefore[param.group],
//             [param.name]: choice0,
//           }
//         });
//       });
// });
