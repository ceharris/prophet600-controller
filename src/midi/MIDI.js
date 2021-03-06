
export const SYSEX_STATUS = 0xf0;
export const EOX_STATUS = 0xf7;

const toHex = (n) => {
  if (Array.isArray(n)) {
    const a = n.reduce((s, e) => {
      let t = s;
      if (s.length > 0) {
        t += ", ";
      }
      t += toHex(e);
      return t;
    }, "");
    
    return "[" + a + "]";
  }
  
  const s = "00" + n.toString(16).toLowerCase();
  return s.substring(s.length - 2);    
};

class MIDI {
  inputChannel = undefined;
  outputChannel = 0;
  activeSensing = false;
  
  constructor() {
    this.midiAccess = undefined;
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleInputMessage = this.handleInputMessage.bind(this);
    this.channelMessageHandlers = [];
    this.systemMessageHandlers = [];
  }

  setMidiAccess(midiAccess) {
    this.midiAccess = midiAccess;
    midiAccess.onstatechange = this.handleStateChange;
    this.updateInputs(midiAccess.inputs);
    this.updateOutputs(midiAccess.outputs);
  }

  addSystemMessageHandler(handler) {
    if (this.systemMessageHandlers.indexOf(handler) >= 0) return;
    this.systemMessageHandlers.push(handler);
  }

  removeSystemMessageHandler(handler) {
    const i = this.systemMessageHandlers.indexOf(handler);
    if (i < 0) return;
    this.systemMessageHandlers.splice(i, 1);
  }
  
  addChannelMessageHandler(handler) {
    if (this.channelMessageHandlers.indexOf(handler) >= 0) return;
    this.channelMessageHandlers.push(handler);
  }

  removeChannelMessageHandler(handler) {
    const i = this.channelMessageHandlers.indexOf(handler);
    if (i < 0) return;
    this.channelMessageHandlers.splice(i, 1);
  }

  handleStateChange(event) {
    this.updateInputs(event.currentTarget.inputs);
    this.updateOutputs(event.currentTarget.outputs);
  }

  handleInputMessage(event) {
    const status = event.data[0];
    if ((status & 0xF0) === 0xF0) {
      if (status === 0xFE && !this.activeSensing) return;
      this.systemMessageHandlers.reduce(
        (handled, handler) => handled || handler(event), false);
      }
    else if (this.isSelectedInputChannel(status)) {
      this.channelMessageHandlers.reduce(
        (handled, handler) => handled || handler(event), false);
      }
  }

  updateInputs(inputs) {
    this.outputs = inputs;
    const inputsArray = Array.from(inputs.values());
    if (this.selectedInput !== undefined) {
      this.selectedInput = inputsArray.find(
          input => input.id === this.selectedInput.id);
    }
    if (this.selectedInput === undefined) {
      this.selectedInput = inputsArray.find(input => true);
    }
    if (this.selectedInput !== undefined) {
      this.selectedInput.onmidimessage = this.handleInputMessage;
    }
    console.log("selected input", this.selectedInput);    
  }

  updateOutputs(outputs) {
    this.outputs = outputs;
    const outputsArray = Array.from(outputs.values());
    if (this.selectedOutput !== undefined) {
      this.selectedOutput = outputsArray.find(
          output => output.id === this.selectedOutput.id);
    }
    if (this.selectedOutput === undefined) {
      this.selectedOutput = outputsArray.find(output => true);
    }
    console.log("selected output", this.selectedOutput);    
  }

  isSelectedInputChannel(status) {
    return this.inputChannel === undefined
        || (status & this.inputChannel) === this.inputChannel;
  }

  createChannelStatus(status) {
    return status | (this.outputChannel & 0xf);
  }
  
  send(message) {
    if (this.selectedOutput !== undefined) {
      this.selectedOutput.send(message);
    }
    
    const status = this.selectedOutput !== undefined ? "sent" : "dropped";
    console.log(`${status} ${toHex(message)}`);    
  }

  controlChange(controller, parameter) {
    const status = this.createChannelStatus(0xb0);
    const message = [ status, controller & 0x7f, parameter & 0x7f ];
    this.send(message);
  }

  programChange(program) {
    const status = this.createChannelStatus(0xc0);
    const message = [ status, program & 0x7f ];
    this.send(message);
  }

  systemExclusive(manufacturerId, payload) {
    const message = [ SYSEX_STATUS ];
    if (Array.isArray(manufacturerId)) {
      message.push(...[...manufacturerId].map(b => b & 0x7f));
    }
    else {
      message.push(manufacturerId & 0x7f);
    }
    if (Array.isArray(payload)) {
      message.push(...[...payload].map(b => b & 0x7f));
    }
    else {
      message.push(payload & 0x7f);
    }
    message.push(EOX_STATUS);

    this.send(message);
  }

  async open(options) {
    if (!navigator.requestMIDIAccess) {
      throw new Error("MIDI unavailable in this browser");
    }
    const midiAccess = await navigator.requestMIDIAccess(options);
    console.log("MIDI access successful");
    this.setMidiAccess(midiAccess);
  }

}

export default new MIDI();