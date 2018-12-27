import React, { Component } from 'react';
import DrumPads from './DrumPads';
import Switch from './Switch';
import Display from './Display';
import './App.sass';
import Dial from './Dial';
import Slider from './Slider';
import PADS from '../globals/pads';

class App extends Component {
    state = {
        powerOn: false,
        volume: 94,
        display: 'Power: Off',
        loadingPad: false,
        pads: [],
    }

    timer = null;

    componentDidMount() {
        this.setState({ pads: PADS });
    }

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
        const { loadingPad, powerOn } = this.state;
        if (!loadingPad && powerOn) {
            this.playAudio(id);
            this.lightUpDrumPad(id, padName);
        }
    }

    lightUpDrumPad = (id, padName) => {
        const { pads } = this.state;
        const newPads = pads.map(pad => (
            pad.id === id ? { ...pad, active: true } : pad
        ));
        this.setState({ pads: newPads, display: padName, loadingPad: true });
        this.timer = setTimeout(() => {
            this.setState({ pads, display: '', loadingPad: false });
        }, 300);
    }

    playAudio = (id) => {
        const { pads, volume } = this.state;
        const { sound } = pads.find(element => id === element.id);
        const audio = new Audio(sound);
        audio.volume = volume / 100;
        audio.play();
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
