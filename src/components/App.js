import React, { Component } from 'react';
import DrumPads from './DrumPads';
import Switch from './Switch';
import Display from './Display';
import './App.sass';
import Dial from './Dial';
import Slider from './Slider';

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
                    <div className="dial-container">
                        <Dial label="bass" />
                        <Dial label="treble" />
                        <Dial label="tone" />
                    </div>
                    <Slider />
                    <Switch handlePowerClick={this.handlePowerClick} powerOn={powerOn} />
                </div>
            </div>
        );
    }
}

export default App;
