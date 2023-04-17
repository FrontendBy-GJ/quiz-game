import { useContext } from 'react';
import { QuizContext } from '../QuizContext';

const GameOver = () => {
  const {
    game,
    playerBank,
    setPlayerBank,
    user,
    setUser,
    setCurrentQuestion,
    correctAnswers,
    setCorrectAnswers,
  } = useContext(QuizContext);

  const handleClick = () => {
    setPlayerBank(0);
    setUser(null);
    setCurrentQuestion(0);
    setCorrectAnswers(0);
  };

  return (
    <div className="mt-16 flex-1 px-6 pb-16 text-center tracking-wider text-slate-50">
      <h1 className="text-4xl">Game Over</h1>
      <h2 className="mt-2 text-2xl">
        Thanks for playing <span className="font-bold capitalize">{user}</span>!
      </h2>
      <p className="mt-5">
        You answered {correctAnswers} / {game.length} questions correct!
      </p>
      <p className="mt-2">Total Winnings : ${playerBank.toLocaleString()}</p>
      <button
        onClick={handleClick}
        className="mt-10 animate-bounce rounded bg-green-600 p-3 text-slate-50 shadow-xl hover:animate-none"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
