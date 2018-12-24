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
        pads: [
            { id: 'Q', active: false },
            { id: 'W', active: false },
            { id: 'E', active: false },
            { id: 'A', active: false },
            { id: 'S', active: false },
            { id: 'D', active: false },
            { id: 'Z', active: false },
            { id: 'X', active: false },
            { id: 'C', active: false },
        ],
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

    handlePadClick = (id) => {
        const { pads } = this.state;
        const newPads = pads.map(pad => (
            pad.id === id ? { ...pad, active: true } : pad
        ));
        this.setState({ pads: newPads });
        setTimeout(() => {
            this.setState({ pads });
        }, 500);
    }

    render() {
        const {
            powerOn,
            volume,
            display,
            pads,
        } = this.state;

        return (
            <div className="drum-machine-wrapper">
                <DrumPads handlePadClick={this.handlePadClick} pads={pads} />
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
