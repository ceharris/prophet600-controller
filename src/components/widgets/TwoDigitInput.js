import React from "react";

const TEMPLATE_TEXT = "8.8";

export default class TwoDigitDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.state = {
      digits: "",
      latched: false,
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("keyup", this.handleKeyUp);
  }
  
  handleKeyDown(event) {
    if (event.key === "Backspace" 
        || event.key === "Delete" 
        || event.key === "Escape") {
      this.setState({ digits: "", latched: false});
      return;
    }
    
    if (this.state.latched) return;
    if (event.key < "0" || event.key > "9") return;
    this.setState({ digits: this.state.digits + event.key, latched: true });
  }

  handleKeyUp(event) {
    if (!this.state.latched) return;
    if (event.key !== this.state.digits.charAt(this.state.digits.length - 1)) {
      return;
    }
    const finished = this.state.digits.length === 2;
    const digits = finished ? "" : this.state.digits;
    if (finished && typeof this.props.onChange === "function") {
      const value = Number(this.state.digits);
      this.props.onChange({ value: value });
    }
    this.setState({ digits: digits, latched: false });
  }

  handleKeyPress(event) {
    console.log(event);
  }

  textForValue(value) {
    const number = value % 100;
    if (number === undefined || number === null || Number.isNaN(number)) {
      return "ud"; 
    }
    if (number < 10) {
      return "0" + number;
    }
    return number.toString();
  };

  textForState() {
    if (this.state.digits.length > 0) {
      let text = this.state.digits;
      if (text.length < 2) {
        text += "!";
      }
      return text;
    }
    else {
      let text = this.textForValue(this.props.value);
      if (this.props.point) {
        text = text.charAt(0) + "." + text.charAt(1);
      }
      return text;
    }
  }

  render() {
    const text = this.textForState();
    return (
      <svg className="two-digit-display" viewBox="0 0 120 90">
        <g transform="translate(60, 45) scale(1, -1)">
          <rect className="display-box" x="-60" y="-45" 
              width="120" height="90" rx="5" ry="5"/>
          <text className="dseg-bg" alignmentBaseline="middle" 
              textAnchor="middle" transform="scale(1, -1)" x="0" y="1">
            {TEMPLATE_TEXT}
          </text>
          <text className="dseg-fg" alignmentBaseline="middle" 
              textAnchor="middle" transform="scale(1, -1)" x="0" y="1">
            {text}
          </text>
        </g>
      </svg>
    );
  }
}
