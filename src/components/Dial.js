import React from 'react';
import './Dial.sass';

const Dial = ({ label }) => (
    <div className="dial-column">
        <p className="dial-label">{label.toUpperCase()}</p>
        <div className="dial">
            <div className="dial_marker" />
        </div>
    </div>
);

Dial.defaultProps = {
    label: 'name',
};

export default Dial;
