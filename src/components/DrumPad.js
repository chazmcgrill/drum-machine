import React from 'react';
import './DrumPad.sass';

class Pad extends React.Component {
    constructor(props) {
        super(props);
        this.padRef = React.createRef;
    }

    handlePadClick = () => {
        this.padRef.currentTime = 0;
        this.padRef.play();
    }

    render() {
        const { padData } = this.props;
        return (
            <div
                className="drum-pad"
                onClick={() => this.handlePadClick()}
                role="button"
                tabIndex="0"
                id={padData.name}
                style={{
                    backgroundColor: padData.active ? '#51EBF5' : '#46C0C8',
                }}
            >
                <audio
                    ref={(input) => { this.padRef = input; }}
                    src={padData.sound}
                    className="clip"
                    id={padData.id}
                    autoPlay={false}
                />
                {padData.id}
            </div>
        );
    }
}

export default Pad;
