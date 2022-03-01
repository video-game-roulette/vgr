import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

function GameProvider({ children }) {
  const [game, setGame] = useState('');

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGame needs to be inside the UserProvider');
  }
  return context;
}

export { GameProvider, useGame };
