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
            { id: 'Q', active: false, name: 'high-hat' },
            { id: 'W', active: false, name: 'kick-drum' },
            { id: 'E', active: false, name: 'floor-tom' },
            { id: 'A', active: false, name: 'clash' },
            { id: 'S', active: false, name: 'ride' },
            { id: 'D', active: false, name: 'cow-bell' },
            { id: 'Z', active: false, name: 'mid-tom' },
            { id: 'X', active: false, name: 'clap' },
            { id: 'C', active: false, name: 'snare' },
        ],
        loadingPad: false,
    }

    timer = null;

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
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

    handlePadClick = (id, padName) => {
        const { pads, loadingPad, powerOn } = this.state;
        if (!loadingPad && powerOn) {
            const newPads = pads.map(pad => (
                pad.id === id ? { ...pad, active: true } : pad
            ));
            this.setState({ pads: newPads, display: padName, loadingPad: true });
            this.timer = setTimeout(() => {
                this.setState({ pads, display: '', loadingPad: false });
            }, 300);
        }
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
