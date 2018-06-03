import React from 'react';
import Pad from './Pad';

const padsDS = [
  { id: 0, active: false },
  { id: 1, active: false },
  { id: 2, active: false },
  { id: 3, active: false },
  { id: 4, active: false },
  { id: 5, active: false },
  { id: 6, active: false },
  { id: 7, active: false },
  { id: 8, active: false }
]

const DrumPads = () => {
  return (
    <div className="pad-box">
      {padsDS.map(p => <Pad key={p.id} padData={p}/>)}
    </div>
  )
}

export default DrumPads;