import React from 'react';
import Cell from '../Cell';
import { create } from 'react-test-renderer';

test('Should render the cell with the passed props', () => {
  const cell = create(<Cell x={1} y={1} filled={true} />);

  // cell.getInstance().
});
