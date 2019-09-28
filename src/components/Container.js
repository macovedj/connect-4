import React from 'react';
import './Container.css';
import Rows from './Rows';
import DropRow from './DropRow';

const Container = () => {
  const rows = [0,1,2,3,4,5];
  return (
    <div className="Container">
      <DropRow />
      <Rows rows={rows}/>
    </div>
  )
};

export default Container;