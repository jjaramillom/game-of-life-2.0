import React, { createContext, useState } from 'react';

interface BoardEventsContext {
  selecting: boolean;
  setSelecting: (value: boolean) => void;
}

const boardEventsContext = createContext<BoardEventsContext>({
  selecting: false,
  setSelecting: (value: boolean) => {},
});

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const BoardEventsProvider = ({ children }: Props) => {
  const [selecting, setSelecting] = useState(false);

  return (
    <boardEventsContext.Provider
      value={{
        selecting,
        setSelecting,
      }}>
      {children}
    </boardEventsContext.Provider>
  );
};

export { boardEventsContext };
export default BoardEventsProvider;
