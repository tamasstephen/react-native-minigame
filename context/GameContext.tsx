import { createContext, useContext, useState } from "react";

interface GameContext {
  currentGuess: number;
  currentNumber: string;
  rounds: number;
  resetGame: () => void;
  getCurrentNumber: () => string;
  setCurrentNumber: (guess: string) => void;
  getCurrentGuess: () => number;
  setCurrentGuess: (guess: number) => void;
  increaseRounds: () => void;
}

const GameContext = createContext<GameContext>({
  rounds: 0,
  currentGuess: 0,
  currentNumber: "",
  resetGame: () => {},
  getCurrentNumber: () => "",
  setCurrentNumber: () => {},
  getCurrentGuess: () => 0,
  setCurrentGuess: () => {},
  increaseRounds: () => {},
});

export const GameContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentGuess, setGuess] = useState(0);
  const [currentNumber, setNumber] = useState("");
  const [rounds, setRounds] = useState(0);

  const increaseRounds = () => setRounds((prevRounds) => prevRounds + 1);
  const resetRounds = () => setRounds(0);

  const resetGame = () => {
    setCurrentNumber("");
    setCurrentGuess(0);
    resetRounds();
  };

  const getCurrentNumber = () => currentNumber;
  const setCurrentNumber = (guess: string) => setNumber(guess);
  const getCurrentGuess = () => currentGuess;
  const setCurrentGuess = (guess: number) => setGuess(guess);

  return (
    <GameContext.Provider
      value={{
        rounds,
        currentGuess,
        currentNumber,
        resetGame,
        setCurrentNumber,
        getCurrentGuess,
        getCurrentNumber,
        setCurrentGuess,
        increaseRounds,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const {
    rounds,
    currentGuess,
    currentNumber,
    resetGame,
    setCurrentNumber,
    setCurrentGuess,
    increaseRounds,
  } = useContext(GameContext);

  return {
    rounds,
    resetGame,
    setCurrentNumber,
    setCurrentGuess,
    currentNumber,
    currentGuess,
    increaseRounds,
  };
};
