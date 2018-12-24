import React from 'react';
import DrumPad from './DrumPad';
import './DrumPads.sass';

const DrumPads = ({ handlePadClick, pads }) => (
    <div className="pad-box">
        {pads.map(p => <DrumPad key={p.id} padData={p} handlePadClick={handlePadClick} />)}
    </div>
);

export default DrumPads;
