import { QuizProvider } from './QuizContext';
import Quiz from './components/Quiz';

function App() {
  return (
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );
}

export default App;
