
class MIDI {
  channel = 1;
  
  async controlChange(controller, parameter) {
    const status = 0xB0 | (this.channel & 0xf);
    const message = [ status, controller & 0x7f, parameter & 0x7f ];
    console.log("sending", message);
  }

}

export default new MIDI();