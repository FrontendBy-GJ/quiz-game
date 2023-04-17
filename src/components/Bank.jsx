import { useContext, useEffect } from 'react';
import { QuizContext } from '../QuizContext';

const Bank = () => {
  const {
    game,
    currentQuestion,
    setCurrentQuestion,
    playerBank,
    moneyWon,
    timer,
    setTimer,
    stopTimer,
    setMoneyWon,
  } = useContext(QuizContext);

  useEffect(() => {
    if (timer === 0) {
      setCurrentQuestion((prev) => prev + 1);
    }

    const time = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (stopTimer) {
      clearInterval(time);
    }

    return () => clearInterval(time);
  }, [timer, stopTimer, currentQuestion]);

  useEffect(() => {
    setTimer(30);
  }, [currentQuestion]);

  useEffect(() => {
    const bank = setTimeout(() => {
      setMoneyWon(false);
    }, 1000);

    return () => {
      clearTimeout(bank);
    };
  }, [playerBank]);

  const selected = timer <= 5 && !stopTimer;

  return (
    <>
      {currentQuestion < game.length && (
        <div
          className={`mt-5 bg-gradient-to-t from-black to-blue-700 ${
            moneyWon ? 'bank' : ''
          }
            ${selected ? 'warning' : ''}`}
        >
          <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4 text-lg text-slate-50 sm:text-xl">
            <span>Bank: ${playerBank.toLocaleString()}</span>
            {!stopTimer && <span className="font-bold">{timer}</span>}
            <span>
              Question {currentQuestion + 1} / {game.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Bank;
