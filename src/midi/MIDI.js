

const toHex = (n) => {
  const s = "00" + n.toString(16).toUpperCase();
  return s.substring(s.length - 2);
};

export class MIDI {
  channel = 0;
  
  constructor(midiAccess) {
    this.midiAccess = midiAccess;
    this.handleStateChange = this.handleStateChange.bind(this);
    this.midiAccess.onstatechange = this.handleStateChange;
    this.updateOutputs(midiAccess.outputs);
  }

  handleStateChange(event) {
    this.updateOutputs(event.currentTarget.outputs);
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

  async controlChange(controller, parameter) {
    const status = 0xB0 | (this.channel & 0xf);
    const message = [ status, controller & 0x7f, parameter & 0x7f ];
    if (this.selectedOutput === undefined) {
      throw new Error("no MIDI output is available");
    }
    this.selectedOutput.send(message);
    console.log(`sent ${toHex(message[0])} ${toHex(message[1])} ${toHex(message[2])}`);
  }

  static async open(options) {
    if (!navigator.requestMIDIAccess) {
      throw new Error("MIDI unavailable in this browser");
    }
    const midiAccess = await navigator.requestMIDIAccess(options);
    console.log("MIDI access successful");
    return new MIDI(midiAccess);
  }

}

