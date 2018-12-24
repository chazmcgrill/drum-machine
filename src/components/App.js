import React, { Component } from 'react';
import DrumPads from './DrumPads';
import Switch from './Switch';

class App extends Component {
    state = {
        powerOn: false,
    }

    handlePowerClick = () => {
        const { powerOn } = this.state;
        this.setState({ powerOn: !powerOn });
    }

    render() {
        const { powerOn } = this.state;
        return (
            <div id="app">
                <DrumPads />
                <div>
                    <div id="display">display</div>
                    <Switch handlePowerClick={this.handlePowerClick} powerOn={powerOn} />
                    <div className="dials">dials</div>
                    <div className="buttons">buttons</div>
                </div>
            </div>
        );
    }
}

export default App;
