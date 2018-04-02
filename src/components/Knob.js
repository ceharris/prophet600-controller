import React from "react";

export const ROTATION_RANGE_DEGREES = 360 - 45;
export const EXCLUDED_RANGE_DEGREES = 360 - ROTATION_RANGE_DEGREES;
export const ZERO_POINT_DEGREES = 270 - EXCLUDED_RANGE_DEGREES / 2;

export const DEFAULT_MIN_RADIUS = 25;

export default class Knob extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { ui: { activated: false } };
  }

  componentDidMount() {
    window.addEventListener("mouseup", this.handleMouseUp);
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mouseup", this.handleMouseUp);
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseDown(event) {
    if (this.state.ui.activated) return;
    
    this.setState({ 
      ui: {
        activated: true,
        originX: event.clientX,
        originY: event.clientY,
      }
    });

    if (typeof this.props.onActivate === "function") {
      this.props.onActivate(event);
    }
  }
  
  handleMouseUp(event) {
    const state = this.state.ui;
    if (!state.activated) return;

    if (state.triggered && typeof this.props.onChanged === "function") {
      const dx = event.clientX - state.originX;
      const dy = event.clientY - state.originY;
      const rotation = this.computeRotation(dx, dy, state.phi);
      const changeEvent = this.changeEvent(event, dx, dy, rotation);
      this.props.onChanged(changeEvent);
    }
    
    this.setState({ 
      ui: {
        activated: false,
      }
    });

    if (typeof this.props.onDeactivate === "function") {
      this.props.onDeactivate(event);
    }
  }
  
  handleMouseMove(event) {
    const state = this.state.ui;
    if (!state.activated) return;

    const dx = event.clientX - state.originX;
    const dy = event.clientY - state.originY;

    if (!state.triggered) {
      const radius = Math.sqrt(dx*dx + dy*dy);
      let minRadius = this.props.adjustmentMinRadius;
      if (!minRadius) minRadius = DEFAULT_MIN_RADIUS;
      if (radius < minRadius) return;

      state.phi = Math.atan2(dy, dx);
      state.triggered = true;
    }

    if (typeof this.props.onChange === "function") {
      const rotation = this.computeRotation(dx, dy, state.phi);
      const changeEvent = this.changeEvent(event, dx, dy, rotation);
      this.props.onChange(changeEvent);
    }
  
    this.setState({ ui: state });
  }

  computeRotation(dx, dy, phi) {
    const rx = dx*Math.cos(phi) + dy*Math.sin(phi);
    const ry = -dx*Math.sin(phi) + dy*Math.cos(phi);
    return 180 * (Math.atan2(ry, rx) / Math.PI);
  }

  changeEvent(event, dx, dy, rotation) {
    return {
      ...event,
      knobX: dx,
      knobY: dy,
      rotation,
      percentRotation: rotation / ROTATION_RANGE_DEGREES,
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
            onMouseDown={this.handleMouseDown} onClick={this.props.onClick}/>
      </g>
    </svg>
    );
  }

};

