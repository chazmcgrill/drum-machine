import React from 'react';
import './Slider.sass';

export default ({ volume, handleVolumeChange }) => (
    <div className="slider-wrapper">
        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
            <path fill="#000000" d="M7,9V15H11L16,20V4L11,9H7Z" />
        </svg>

        <input type="range" className="slider" min={0} max={100} value={volume} onChange={handleVolumeChange} />

        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
            <path fill="#000000" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
        </svg>
    </div>
);
