import React from 'react';
import DrumPad from './DrumPad';
import './DrumPads.sass';

const keyCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67];
class DrumPads extends React.Component {
    componentWillMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        const { keyCode } = event;
        if (keyCodes.includes(keyCode)) {
            const { pads, lightUpDrumPad } = this.props;
            const id = String.fromCharCode(keyCode);
            const { name } = pads.find(pad => pad.id === id);
            this.playAudio(id);
            lightUpDrumPad(id, name);
        }
    }

    playAudio = (id) => {
        const { volume, powerOn } = this.props;
        if (powerOn) {
            const { current } = this[id];
            current.currentTime = 0;
            current.volume = volume / 100;
            current.play();
        }
    }

    handlePadClick = (id, padName) => {
        const { powerOn, lightUpDrumPad } = this.props;
        if (powerOn) {
            this.playAudio(id);
            lightUpDrumPad(id, padName);
        }
    }

    createPadRef = (id) => {
        this[id] = React.createRef();
        return this[id];
    }

    render() {
        const { pads } = this.props;
        return (
            <div className="pad-box">
                {pads.map(p => (
                    <DrumPad
                        key={p.id}
                        padData={p}
                        handlePadClick={this.handlePadClick}
                        forwardedRef={this.createPadRef(p.id)}
                    />
                ))}
            </div>
        );
    }
}

export default DrumPads;
