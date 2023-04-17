import { createContext, useEffect, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [game, setGame] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [playerBank, setPlayerBank] = useState(0);
  const [moneyWon, setMoneyWon] = useState(false);
  const [user, setUser] = useState(null);
  const [timer, setTimer] = useState(30);
  const [stopTimer, setStopTimer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/aaronnech/Who-Wants-to-Be-a-Millionaire/master/questions.json'
    )
      .then((res) => res.json())
      .then((data) => {
        setGame(
          data.games[Math.floor(Math.random() * data.games.length)]?.questions
        );
      });
  }, [user]);

  const value = {
    game,
    setGame,
    currentQuestion,
    setCurrentQuestion,
    playerBank,
    setPlayerBank,
    moneyWon,
    setMoneyWon,
    user,
    setUser,
    timer,
    setTimer,
    stopTimer,
    setStopTimer,
    correctAnswers,
    setCorrectAnswers,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
