import React from 'react';
import './Row.css';
import Slot from './Slot.js';

const Row = props => {
  const { slots, id } = props;
  return (
    <div className="row">
      {slots.map(id => <Slot id={id} />)}
    </div>
  );
}

export default Row;