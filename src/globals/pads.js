import soundSD from '../sounds/SD.mp3';
import soundCP from '../sounds/CP.mp3';
import soundOH from '../sounds/OH.mp3';
import soundKD from '../sounds/BD.mp3';
import soundFT from '../sounds/LT.mp3';
import soundRS from '../sounds/RS.mp3';
import soundHC from '../sounds/HC.mp3';
import soundCB from '../sounds/CB.mp3';
import soundMT from '../sounds/MT.mp3';

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
