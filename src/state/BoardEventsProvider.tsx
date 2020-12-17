import React, { createContext, useState } from 'react';

interface BoardEventsContext {
  filling: boolean;
  setFilling: (value: boolean) => void;
  clearing: boolean;
  setClearing: (value: boolean) => void;
}

const boardEventsContext = createContext<BoardEventsContext>({
  filling: false,
  setFilling: (value: boolean) => {},
  clearing: false,
  setClearing: (value: boolean) => {},
});

type Props = {
  children?: React.ReactNode;
};

const BoardEventsProvider = ({ children }: Props) => {
  const [filling, setFilling] = useState(false);
  const [clearing, setClearing] = useState(false);

  return (
    <boardEventsContext.Provider
      value={{
        filling,
        setFilling,
        clearing,
        setClearing,
      }}>
      {children}
    </boardEventsContext.Provider>
  );
};

export { boardEventsContext };
export default BoardEventsProvider;
