import React, { createContext, useState } from 'react';

interface GameStatusContext {
  running: boolean;
  setRunning: (status: boolean) => void;
  currentGeneration: number;
  resetCurrentGeneration: () => void;
  increaseCurrentGeneration: () => void;
}

const gameStatusContext = createContext<GameStatusContext>({
  running: false,
  setRunning: (value: boolean) => {},
  currentGeneration: 0,
  resetCurrentGeneration: () => {},
  increaseCurrentGeneration: () => {},
});

type Props = {
  children?: React.ReactNode;
};

const GameStatusProvider = ({ children }: Props) => {
  const [running, setRunning] = useState(false);
  const [currentGeneration, setCurrentGeneration] = useState(0);

  const resetCurrentGeneration = () => setCurrentGeneration(0);
  const increaseCurrentGeneration = () => setCurrentGeneration(currentGeneration + 1);

  return (
    <gameStatusContext.Provider
      value={{
        running,
        setRunning,
        currentGeneration,
        resetCurrentGeneration,
        increaseCurrentGeneration,
      }}>
      {children}
    </gameStatusContext.Provider>
  );
};

export { gameStatusContext };
export default GameStatusProvider;
