import React, { Component } from 'react';
import DrumPads from './DrumPads';
import Switch from './Switch';
import Display from './Display';
import './App.sass';

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
            <div className="drum-machine-wrapper">
                <DrumPads />
                <div>
                    <Display />
                    <Switch handlePowerClick={this.handlePowerClick} powerOn={powerOn} />
                    <div className="dials">dials</div>
                    <div className="buttons">buttons</div>
                </div>
            </div>
        );
    }
}

export default App;
