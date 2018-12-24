import React, { Fragment } from 'react';
import './Switch.sass';

export default ({ powerOn, handlePowerClick }) => (
    <Fragment>
        <div className="switch-wrapper">
            <p className="switch_tag">ON</p>
            <div className="switch" onClick={handlePowerClick} role="button" tabIndex="0">
                <div className="switch_inner" style={{ left: powerOn ? 0 : '25px' }} />
            </div>
            <p className="switch_tag">OFF</p>
        </div>
    </Fragment>
);
