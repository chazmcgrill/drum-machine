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
        volume: 94,
        display: 'Power: Off',
    }

    handlePowerClick = () => {
        const { powerOn } = this.state;
        this.setState({
            powerOn: !powerOn,
            display: `Power: ${powerOn ? 'Off' : 'On'}`,
        });
    }

    handleVolumeChange = (e) => {
        const volume = parseInt(e.target.value, 10);
        this.setState({
            volume,
            display: `Volume: ${volume}`,
        });
    }

    render() {
        const { powerOn, volume, display } = this.state;
        return (
            <div className="drum-machine-wrapper">
                <DrumPads />
                <div>
                    <Display message={display} />
                    <div className="dial-container">
                        <Dial label="bass" />
                        <Dial label="treble" />
                        <Dial label="tone" />
                    </div>
                    <Slider volume={volume} handleVolumeChange={this.handleVolumeChange} />
                    <Switch handlePowerClick={this.handlePowerClick} powerOn={powerOn} />
                </div>
            </div>
        );
    }
}

export default App;
