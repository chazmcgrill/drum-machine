import React from 'react';
import DrumPad from './DrumPad';
import './DrumPads.sass';

const padsDS = [
    { id: 'Q', active: false },
    { id: 'W', active: false },
    { id: 'E', active: false },
    { id: 'A', active: false },
    { id: 'S', active: false },
    { id: 'D', active: false },
    { id: 'Z', active: false },
    { id: 'X', active: false },
    { id: 'C', active: false },
];

const DrumPads = () => (
    <div className="pad-box">
        {padsDS.map(p => <DrumPad key={p.id} padData={p} />)}
    </div>
);

export default DrumPads;
