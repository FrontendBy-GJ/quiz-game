import { QuizContext } from '../QuizContext';
import Answers from './Answers';
import Bank from './Bank';
import GameOver from './GameOver';
import Header from './Header';
import Question from './Question';
import { useContext } from 'react';
import Start from './Start';

const Quiz = () => {
  const { game, currentQuestion, user } = useContext(QuizContext);

  return (
    <div className="flex min-h-screen flex-col justify-between bg-gradient-to-t from-black via-purple-950 to-black font-roboto">
      <Header />
      {user ? (
        <>
          <Question />
          <Answers />
          <Bank />
          {currentQuestion > game?.length - 1 && <GameOver />}
        </>
      ) : (
        <Start />
      )}
    </div>
  );
};

export default Quiz;
