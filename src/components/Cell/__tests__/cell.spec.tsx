import React from 'react';
import Cell from '../Cell';
import { shallow, } from 'enzyme';

describe('Should render tan empty cell', () => {
  const wrapper = shallow(<Cell x={1} y={1} filled />);
  console.log(wrapper.html());
});
