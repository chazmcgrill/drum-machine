import React from 'react';
import Pad from './Pad';

const padsDS = [
  { id: "Q", active: false },
  { id: "W", active: false },
  { id: "E", active: false },
  { id: "A", active: false },
  { id: "S", active: false },
  { id: "D", active: false },
  { id: "Z", active: false },
  { id: "X", active: false },
  { id: "C", active: false }
]

const DrumPads = () => {
  return (
    <div className="pad-box">
      {padsDS.map(p => <Pad key={p.id} padData={p}/>)}
    </div>
  )
}

export default DrumPads;