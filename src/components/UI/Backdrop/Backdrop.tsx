import React from 'react';

import classes from './Backdrop.module.scss';

interface Props {
  onClick: () => void;
  show?: boolean;
}

const Backdrop = ({ show, onClick }: Props) => {
  return show ? <div className={classes.backdrop} onClick={onClick}></div> : null;
};

export default Backdrop;
