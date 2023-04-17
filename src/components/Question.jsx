import { useContext } from 'react';
import { QuizContext } from '../QuizContext';

const Question = () => {
  const { game, currentQuestion } = useContext(QuizContext);

  return (
    <>
      {currentQuestion < game.length && (
        <div className="mx-auto mt-24 w-full max-w-2xl px-6">
          <div className="rounded-sm bg-gradient-to-b from-blue-700 to-slate-950 px-4  py-6 text-center tracking-wider text-slate-50 outline outline-offset-2 outline-slate-500 sm:text-lg">
            <h1>{game[currentQuestion]?.question}</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Question;
