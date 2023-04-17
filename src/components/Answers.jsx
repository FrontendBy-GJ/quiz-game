import { useContext, useState } from 'react';
import { QuizContext } from '../QuizContext';

const Answers = () => {
  const [checking, setChecking] = useState(false);

  const {
    game,
    currentQuestion,
    setCurrentQuestion,
    setPlayerBank,
    setMoneyWon,
    setStopTimer,
    setCorrectAnswers,
  } = useContext(QuizContext);

  const delay = (time, callback) => {
    setTimeout(() => {
      callback();
    }, time);
  };

  const correctAnswer = game[currentQuestion]?.correct;

  const checkAnswer = (answer, index) => {
    setStopTimer(true);
    setChecking(true);

    if (correctAnswer === index) {
      answer.target.classList.add('correct');
      setCorrectAnswers((prev) => prev + 1);
      delay(4000, () => {
        setPlayerBank((prev) => prev + 1000);
        setMoneyWon(true);
      });
    } else {
      answer.target.classList.add('wrong');
    }

    delay(4000, () => {
      setCurrentQuestion((prev) => prev + 1);
      answer.target.classList.remove('correct', 'wrong');
      setStopTimer(false);
      setChecking(false);
    });
  };

  return (
    <div className="mx-auto my-2 grid w-full max-w-2xl grid-cols-1 gap-3 px-6 sm:grid-cols-2 sm:gap-8">
      {game[currentQuestion]?.content.map((answer, index) => (
        <button
          disabled={checking}
          key={index}
          onClick={(answer) => checkAnswer(answer, index)}
          className="mt-5 rounded-md bg-gradient-to-b from-blue-700 via-blue-950 to-blue-700 px-4 py-3 capitalize tracking-widest text-slate-50 shadow-xl outline outline-offset-4 outline-slate-500 transition-transform hover:scale-105 focus:outline-4 focus:outline-offset-0 focus:outline-slate-200 sm:text-lg"
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
