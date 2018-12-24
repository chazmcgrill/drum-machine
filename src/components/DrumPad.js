import React from 'react';
import './DrumPad.sass';

const Pad = ({ padData }) => (
    <div className="pad">{padData.id}</div>
);

export default Pad;
