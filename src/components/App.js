import React from "react";
import { Provider } from "react-redux";
import Synth from "./synth/Synth";

export default ({ store }) => {
  return (
    <Provider store={store}>
      <Synth/>
    </Provider>
  );
};