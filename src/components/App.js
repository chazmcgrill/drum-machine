import React, { Component } from 'react';
import DrumPads from './DrumPads';

class App extends Component {
  render() {
    return (
      <div id="app">
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

export default App;
