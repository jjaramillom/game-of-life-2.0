import React, { createContext, useContext, useState } from 'react';

import classes from './TooltipContainer.module.scss';
import Backdrop from 'components/UI/Backdrop/Backdrop';

type Mode = 'click' | 'hover';

interface TooltipProps {
  children?: React.ReactNode;
  show?: boolean;
}

interface ContainerProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  mode: Mode;
}

const tooltipContext = createContext({
  show: true,
  setShow: (value: boolean) => {},
});

export const TooltipContainer = ({ children, mode = 'click' }: ContainerProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const show = (trigger: Mode) => {
    if (trigger === mode && !showTooltip) {
      setShowTooltip(true);
      if (mode === 'click') {
        setShowBackdrop(true);
      }
    }
  };

  const handleBackdropClick = () => {
    setShowBackdrop(false);
    setShowTooltip(false);
  };

  const hide = (trigger: Mode) => {
    if (trigger === mode) {
      setShowTooltip(false);
    }
  };

  return (
    <tooltipContext.Provider value={{ show: showTooltip, setShow: setShowTooltip }}>
      <div
        className={classes.main_container}
        onClick={() => show('click')}
        onMouseEnter={() => show('hover')}
        onMouseLeave={() => hide('hover')}>
        <Backdrop show={showBackdrop} onClick={handleBackdropClick} />
        {children}
      </div>
    </tooltipContext.Provider>
  );
};

const Tooltip = ({ children }: TooltipProps) => {
  const { show } = useContext(tooltipContext);
  return show ? <div className={classes.main_tooltip}>{children}</div> : null;
};

TooltipContainer.Tooltip = Tooltip;

export default TooltipContainer;
