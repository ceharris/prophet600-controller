import React from "react";

export const ROTATION_RANGE_DEGREES = 360 - 45;
export const EXCLUDED_RANGE_DEGREES = 360 - ROTATION_RANGE_DEGREES;
export const ZERO_POINT_DEGREES = 270 - EXCLUDED_RANGE_DEGREES / 2;

export const DEFAULT_MIN_RADIUS = 25;

export default class Knob extends React.Component {
  constructor(props) {
    super(props);
    this.handleKnobActivated = this.handleKnobActivated.bind(this);
    this.handleKnobDeactivated = this.handleKnobDeactivated.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { ui: { activeKnob: undefined } };
  }

  componentDidMount() {
    window.addEventListener("knobActivated", this.handleKnobActivated);
    window.addEventListener("knobDeactivated", this.handleKnobDeactivated);
    window.addEventListener("mouseup", this.handleMouseUp);
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("knobActivated", this.handleKnobActivated);
    window.removeEventListener("knobDeactivated", this.handleKnobDeactivated);
    window.removeEventListener("mouseup", this.handleMouseUp);
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleKnobActivated(event) {
    this.setState({
      ui: event.detail,
    });
  }

  handleKnobDeactivated(event) {
    this.setState({
      ui: {
        activeKnob: undefined,
      }
    });
  }

  handleMouseDown(event) {
    const state = this.state.ui;
    if (state.activeKnob) return;
    
    window.dispatchEvent(new CustomEvent("knobActivated", {
      detail: {
        activeKnob: this,
        originX: event.clientX,
        originY: event.clientY,  
      }
    }));

    if (typeof this.props.onActivate === "function") {
      this.props.onActivate(event);
    }
  }
  
  handleMouseUp(event) {
    const state = this.state.ui;
    if (state.activeKnob !== this) return;

    if (state.latched && typeof this.props.onChanged === "function"
        && state.lastX !== undefined) {
      const rotation = this.computeRotation(state.lastX, state.lastY, state.phi);
      const changeEvent = this.changeEvent(state.lastX, state.lastY, rotation);
      this.props.onChanged(changeEvent);
    }
    
    window.dispatchEvent(new CustomEvent("knobDeactivated", {
      detail: {
        activeKnob: this,
      }
    }));

    if (typeof this.props.onDeactivate === "function") {
      this.props.onDeactivate(event);
    }
    
    if (!state.latched && typeof this.props.onClick === "function") {
      this.props.onClick(event);
    }
  }
  
  handleMouseMove(event) {
    const state = this.state.ui;
    if (state.activeKnob !== this) return;

    const dx = event.clientX - state.originX;
    const dy = event.clientY - state.originY;

    const radius = Math.sqrt(dx*dx + dy*dy);
    let minRadius = this.props.adjustmentMinRadius;
    if (!minRadius) minRadius = DEFAULT_MIN_RADIUS;

    if (radius >= minRadius) {
      if (!state.triggered) {
        state.phi = Math.atan2(dy, dx);
        state.gamma = 0;
        state.theta = 0;
        state.lastRotation = 0;
        state.triggered = true;
        state.latched = true;
      }

      const rotation = this.computeRotation(dx, dy);
      state.lastX = dx;
      state.lastY = dy;
    
      if (typeof this.props.onChange === "function") {
        const changeEvent = this.changeEvent(dx, dy, rotation);
        this.props.onChange(changeEvent);
      }
    }
    else if (state.triggered) {
      this.handleMouseUp(event);
    }

    this.setState({ ui: state });
  }

  computeRotation(dx, dy) {
    const state = this.state.ui;
    const phi = state.phi;
    const rx = dx*Math.cos(phi) + dy*Math.sin(phi);
    const ry = -dx*Math.sin(phi) + dy*Math.cos(phi);
    let theta = Math.atan2(ry, rx);

    const epsilon = Math.PI / 8;
    if (Math.abs(Math.PI - state.theta) < epsilon) {
      if (state.theta < Math.PI && theta < 0) {
        state.gamma = 2*Math.PI;
      }
      else if (state.theta > Math.PI && theta > 0) {
        state.gamma = 0;
      }
    }
    else if (Math.abs(-Math.PI - state.theta) < epsilon) {
      if (state.theta > -Math.PI && theta > 0) {
        state.gamma = -2*Math.PI;
      }
      else if (state.theta < -Math.PI && theta < 0) {
        state.gamma = 0;
      }
    }

    theta += state.gamma;

    state.theta = theta;
    this.setState(state);
    return theta;
  }

  changeEvent(dx, dy, rotation) {
    const rotationDegrees = 180 * rotation / Math.PI;
    return {
      rotation: rotationDegrees,
      percentRotation: rotationDegrees / ROTATION_RANGE_DEGREES,
    };
  }

  render() {
    const rotation = ZERO_POINT_DEGREES - ROTATION_RANGE_DEGREES*this.props.percentRotation;
    return (<svg className="knob" viewBox="-80 -80 160 160">
      <defs>
        <linearGradient id="g-outer" x1="0" y1="0" x2="0" y2="1">
          <stop className="stop0" offset="0"/>
          <stop className="stop1" offset="1"/>
        </linearGradient>
        <linearGradient id="g-inner" x1="0" y1="0" x2="0" y2="1">
          <stop className="stop0" offset="0"/>
          <stop className="stop1" offset="1"/>
        </linearGradient>
        <linearGradient id="g-glint" x1="0" y1="0" x2="0" y2="1">
          <stop className="stop0" offset="0"/>
          <stop className="stop1" offset="1"/>
        </linearGradient>
        <linearGradient id="g-pointer" x1="0" y1="0" x2="0" y2="1">
          <stop className="stop0" offset="0"/>
          <stop className="stop1" offset="1"/>
        </linearGradient>
      </defs>
      <g transform="scale(1 -1)">
        <circle className="gap" cx="0" cy="-2" r="77"/>
        <circle className="knurl" cx="0" cy="0" r="75" rotate={rotation}/>
        <circle className="outer" cx="0" cy="0" r="74"/>
        <circle className="inner" cx="0" cy="0" r="65"/>
        <circle className="glint" cx="0" cy="0" r="55"/>
        <circle className="face" cx="0" cy="0" r="52"/>
        <path className="pointer"
              d="M 54,0 L 73.594 -7.735 A 50,50 0 0 1 73.594,7.735 L 54 0" 
              transform={`rotate(${rotation})`} />
        {this.props.children}
        <circle className="glass" cx="0" cy="0" r="75" 
            onMouseDown={this.handleMouseDown}/>
      </g>
    </svg>
    );
  }

};

