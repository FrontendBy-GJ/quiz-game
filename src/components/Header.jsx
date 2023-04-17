import { useContext } from 'react';
import { QuizContext } from '../QuizContext';

const Header = () => {
  const { currentQuestion } = useContext(QuizContext);

  return (
    <>
      <div className="mx-auto mt-24 max-w-xl">
        <h1 className="relative z-50 mx-auto max-w-[200px] -rotate-6 rounded border-2 border-slate-500 bg-gradient-to-t from-black to-orange-500 p-3 text-center font-title text-6xl text-slate-50 sm:text-7xl">
          <span className="absolute -z-10 -translate-x-3/4 -translate-y-20  -rotate-12 rounded-full bg-gradient-to-t from-black to-blue-700 px-5 py-8">
            15
          </span>{' '}
          for{' '}
          <span className="absolute -z-10 -translate-x-1/4 translate-y-1/4 rotate-45 rounded-full bg-gradient-to-t from-black to-blue-700 px-5 py-8">
            15
          </span>
        </h1>
      </div>

      {!currentQuestion && (
        <p className="mt-20 text-center font-roboto tracking-wider text-slate-100 sm:text-lg">
          Answer 15 questions and win $15,000!!!
        </p>
      )}
    </>
  );
};

export default Header;
