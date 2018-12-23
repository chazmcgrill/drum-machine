import React from 'react';
import DrumPads from './DrumPads';

export default () => (
    <div id="app">
        <DrumPads />
        <div>
            <div id="display">display</div>
            <div className="dials">dials</div>
            <div className="buttons">buttons</div>
        </div>
    </div>
);
