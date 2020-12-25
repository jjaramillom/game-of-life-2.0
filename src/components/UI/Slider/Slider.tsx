import React, { useState } from 'react';

import classes from './Slider.module.scss';

type Props = {
  min: number;
  max: number;
  initialValue: number;
  onChange: (value: number) => void;
};

const Slider = ({ min, max, initialValue = min, onChange }: Props) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(event.target.value)
    setValue(val);
    onChange(val);
  };

  return (
    <div className={classes.container}>
      <input
        type='range'
        min={min}
        max={max}
        value={value}
        className={classes.slider}
        onChange={handleChange}></input>
    </div>
  );
};

export default Slider;
