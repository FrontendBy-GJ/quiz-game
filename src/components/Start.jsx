import { useContext, useRef } from 'react';
import { QuizContext } from '../QuizContext';

const Start = () => {
  const { setUser } = useContext(QuizContext);
  const inputRef = useRef();

  const handleClick = () => {
    setUser(inputRef.current.value);
  };

  return (
    <div className="mt-10 flex-1 px-6 pb-24 font-roboto">
      <input
        className="mx-auto block w-full max-w-xs rounded px-4 py-2 tracking-wider placeholder:text-slate-400"
        type="text"
        ref={inputRef}
        placeholder="Enter name"
      />
      <button
        className="text-md mx-auto mt-5 block w-28 rounded bg-green-600 p-2 uppercase tracking-wider text-slate-50 shadow-xl transition hover:scale-110"
        onClick={handleClick}
      >
        Start
      </button>
    </div>
  );
};

export default Start;
