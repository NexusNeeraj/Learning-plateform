import { useState } from "react";

const questions = [
  {
    question: "What is the primary economic problem?",
    options: ["Scarcity", "Inflation", "Unemployment", "Inequality"],
    correct: 0,
    topic: "Basic Concepts",
    difficulty: "easy",
  },
  {
    question: "Which policy is best for reducing demand-pull inflation?",
    options: ["Cut interest rates", "Increase government spending", "Raise taxes", "Print more money"],
    correct: 2,
    topic: "Macroeconomics",
    difficulty: "medium",
  },
  {
    question: "Which market structure has the highest efficiency in the long run?",
    options: ["Monopoly", "Oligopoly", "Perfect Competition", "Monopolistic Competition"],
    correct: 2,
    topic: "Market Structures",
    difficulty: "hard",
  },
];

export default function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    setAnswers([...answers, index]);
    if (index === questions[current].correct) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  // Dashboard calculation
  const getWeakAreas = () => {
    const wrongQs = questions.filter((q, i) => answers[i] !== q.correct);
    const topics = wrongQs.map((q) => q.topic);
    return topics.length ? topics.join(", ") : "None 🎉";
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      {!finished ? (
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-bold mb-4">
            Question {current + 1} of {questions.length}
          </h2>
          <p className="mb-4">{questions[current].question}</p>
          <div className="space-y-2">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full p-2 border rounded hover:bg-gray-100"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-green-50 p-4 shadow rounded-xl">
          <h2 className="text-xl font-bold mb-2">🎯 Quiz Finished!</h2>
          <p className="mb-2">
            Final Score: {score} / {questions.length}
          </p>
          <p className="mb-2">Weak Areas: {getWeakAreas()}</p>
          <p className="mb-2">Trend: {score >= questions.length / 2 ? "Improving 🚀" : "Needs Work 📉"}</p>
          <p className="mb-2">
            Level reached:{" "}
            {score === questions.length
              ? "Hard 🔥"
              : score >= questions.length / 2
              ? "Medium ⚡"
              : "Easy 📘"}
          </p>
        </div>
      )}
    </div>
  );
}
