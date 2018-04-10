import * as PatchActions from "../reducers/actions/patch";
import MIDI from "./MIDI";
import { SYSEX_STATUS, EOX_STATUS } from "./MIDI";

const GLIGLI_ID = [ 0x0, 0x61, 0x16 ]
const PATCH_DUMP_COMMAND = 1;
const PATCH_DUMP_REQUEST_COMMAND = 2;

class SysEx {
  store = undefined;

  constructor () {
    this.handleSystemMessage = this.handleSystemMessage.bind(this);
    MIDI.addSystemMessageHandler(this.handleSystemMessage);
  }

  decodePatch(encoded) {
    const decoded = [];

    for (let i = 0; i*5 < encoded.length && encoded[5*i] !== EOX_STATUS; i++) {
      for (let j = 0; j < 4; j++) {
        decoded.push(encoded[5*i + j]);
      }
    
      const b = encoded[5*i + 4];
      decoded[4*i + 0] |= (b & 1) << 7;
      decoded[4*i + 1] |= (b & 2) << 6;
      decoded[4*i + 2] |= (b & 4) << 5;
      decoded[4*i + 3] |= (b & 8) << 4;
    }
    
    return Uint8Array.from(decoded);
  }

  encodePatch(patch) {
    const decoded = [ ...patch ];
    let pad = decoded.length % 4;
    while (pad-- > 0) {
      decoded.push(0);
    }

    const encoded = [];
    for (let i = 0; i*4 < decoded.length; i++) {
      for (let j = 0; j < 4; j++) {
        encoded.push(decoded[4*i + j] & 0x7f);
      }

      encoded.push(
          ((decoded[4*i + 0] >> 7) & 1)
        | ((decoded[4*i + 1] >> 6) & 2)
        | ((decoded[4*i + 2] >> 5) & 4)
        | ((decoded[4*i + 3] >> 4) & 8)
      )
    }

    return encoded;
  }

  handleSystemMessage(event) {
    if (event.data[0] !== SYSEX_STATUS) return false;
    if (event.data[1] !== GLIGLI_ID[0]) return false;
    if (event.data[2] !== GLIGLI_ID[1]) return false;
    if (event.data[3] !== GLIGLI_ID[2]) return false;
    if (event.data[4] !== PATCH_DUMP_COMMAND) return false;
    const data = this.decodePatch(event.data.slice(5));
    this.store.dispatch(PatchActions.patchStoreData(data[0], data));
    return true;
  }

  sendPatchRequest(patchNumber) {
    MIDI.systemExclusive(GLIGLI_ID, 
      [PATCH_DUMP_REQUEST_COMMAND, patchNumber & 0x7f]);
  }

  sendPatchDump(patch) {
    MIDI.systemExclusive(GLIGLI_ID,
      [PATCH_DUMP_COMMAND, ...this.encodePatch(patch)]);
  }
  
}

export default new SysEx();
