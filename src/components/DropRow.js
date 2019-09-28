import React from 'react';
import './Row.css';
import DropSlot from './DropSlot';

const DropRow = () => {
  const slots = [0,1,2,3,4,5,6];
  return (
    <div className="row">
      {slots.map(slot => <DropSlot />)}
    </div>
  )

}

export default DropRow