import soundSD from '../sounds/E808_SD-01.wav';
import soundCP from '../sounds/E808_CP-01.wav';
import soundOH from '../sounds/E808_OH-01.wav';
import soundKD from '../sounds/E808_BD-01.wav';
import soundFT from '../sounds/E808_LT-01.wav';
import soundRS from '../sounds/E808_RS-01.wav';
import soundHC from '../sounds/E808_HC-01.wav';
import soundCB from '../sounds/E808_CB-01.wav';
import soundMT from '../sounds/E808_MT-01.wav';

export default [
    {
        id: 'Q',
        active: false,
        name: 'high-hat',
        sound: soundOH,
    },
    {
        id: 'W',
        active: false,
        name: 'kick-drum',
        sound: soundKD,
    },
    {
        id: 'E',
        active: false,
        name: 'floor-tom',
        sound: soundFT,
    },
    {
        id: 'A',
        active: false,
        name: 'rim-shot',
        sound: soundRS,
    },
    {
        id: 'S',
        active: false,
        name: 'conga',
        sound: soundHC,
    },
    {
        id: 'D',
        active: false,
        name: 'cow-bell',
        sound: soundCB,
    },
    {
        id: 'Z',
        active: false,
        name: 'mid-tom',
        sound: soundMT,
    },
    {
        id: 'X',
        active: false,
        name: 'clap',
        sound: soundCP,
    },
    {
        id: 'C',
        active: false,
        name: 'snare',
        sound: soundSD,
    },
];
