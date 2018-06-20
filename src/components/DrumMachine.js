import React, { Component } from 'react';
import DrumPads from './Pads';

class DrumMachine extends Component {
  render() {
    return (
      <div id="drum-machine">
        <DrumPads />
        <div>
          <div id="display">display</div>
          <div className="dials">dials</div>
          <div className="buttons">buttons</div>
        </div>
      </div>
    );
  }
}

export default DrumMachine;