import React from 'react';

import classes from './Card.module.scss';

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
const Card = ({ children, style }: Props) => {
  return (
    <div style={style} className={classes.card}>
      {children}
    </div>
  );
};

export default Card;
