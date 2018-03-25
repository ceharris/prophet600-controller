import React from "react";
import { Provider } from "react-redux";
import PolyMod from "./PolyMod/Panel";
import LFO from "./LFO/Panel";
import Voices from "./Voices/Panel";
import OscillatorA from "./OscillatorA/Panel";
import OscillatorB from "./OscillatorB/Panel";
import Mixer from "./Mixer/Panel";
import Filter from "./Filter/Panel";
import Amplifier from "./Amplifier/Panel";
import Performance from "./Performance/Panel";

import { Grid, Row, Col } from "react-bootstrap";

export default ({ store }) => {
  return (
    <Provider store={store}>
      <Grid fluid={true}>
        <Row>
          <Col sm={3}>
            <Voices/>
          </Col>
          <Col sm={3}>
            <OscillatorA/>
          </Col>
          <Col sm={3}>
            <Filter/>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <PolyMod/>
          </Col>
          <Col sm={3}>
            <OscillatorB/>
          </Col>
          <Col sm={3}>
            <Amplifier/>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <LFO/>
          </Col>
          <Col sm={3}>
            <Mixer/>
          </Col>
          <Col sm={3}>
            <Performance/>
          </Col>
        </Row>
      </Grid>
    </Provider>
  );
};