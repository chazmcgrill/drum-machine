import React from 'react';
import './DrumPad.sass';

const Pad = ({ padData, handlePadClick }) => (
    <div
        className="pad"
        onClick={() => handlePadClick(padData.id)}
        role="button"
        tabIndex="0"
        style={{
            backgroundColor: padData.active ? '#51EBF5' : '#46C0C8',
        }}
    >
        {padData.id}
    </div>
);

export default Pad;
