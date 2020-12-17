import React, { createContext, useEffect, useState, useRef } from 'react';

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

  // let gameInterval: NodeJS.Timeout;
  // const updateInterval = useRef<NodeJS.Timeout | null>();

  // const startGame = () => {
  // gameInterval = setInterval(() => increaseCurrentGeneration(), 1000);
  // };

  // const stopGame = () => {
  // clearInterval(gameInterval);
  // };

  // useEffect(() => {
  //   if (running) {
  //     updateInterval.current = setInterval(() => increaseCurrentGeneration(), 500);
  //     return () => {
  //       if (updateInterval.current) {
  //         clearInterval(updateInterval.current);
  //       }
  //     };
  //   }
  // }, [running]);

  const handleSetRunning = (running: boolean) => {
    setRunning(running);
    // if (running) {
    //   startGame();
    // } else {
    //   stopGame();
    // }
  };

  const resetCurrentGeneration = () => setCurrentGeneration(0);
  const increaseCurrentGeneration = () => setCurrentGeneration(currentGeneration + 1);

  return (
    <gameStatusContext.Provider
      value={{
        running,
        setRunning: handleSetRunning,
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
