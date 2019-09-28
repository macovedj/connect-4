import React from 'react';
import Row from './Row';

const Rows = props => {
  const { rows } = props;
  const slots = [0,1,2,3,4,5,6];
  return (
    <>
      {rows.map(id =>
        <Row
          id={id}
          slots={slots}
        />
      )}
    </>
  )

}

export default Rows;