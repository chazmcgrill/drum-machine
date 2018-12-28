import React from 'react';
import './DrumPad.sass';

const Pad = ({ padData, handlePadClick }) => (
    <div
        className="drum-pad"
        onClick={() => handlePadClick(padData.id, padData.name)}
        role="button"
        tabIndex="0"
        id={padData.name}
        style={{
            backgroundColor: padData.active ? '#51EBF5' : '#46C0C8',
        }}
    >
        {/* <audio src={padData.sound} className="clip" id={padData.id} autoPlay={false} /> */}
        {padData.id}
    </div>
);

export default Pad;
