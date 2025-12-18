import { useState } from "react";

export default function Quiz() {
  const quizData = [
    {
      question: "What is React?",
      options: [
        "A JavaScript library",
        "A database",
        "A CSS framework",
        "A backend language"
      ],
      answer: "A JavaScript library"
    },
    {
      question: "Which hook is used for state?",
      options: ["useRef", "useEffect", "useState", "useMemo"],
      answer: "useState"
    },
    {
      question: "React is developed by?",
      options: ["Google", "Facebook", "Microsoft", "Amazon"],
      answer: "Facebook"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === quizData[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f4f6f8;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .quiz {
          background: white;
          padding: 25px;
          width: 350px;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        h2 {
          margin-bottom: 15px;
        }

        .options button {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border: none;
          border-radius: 5px;
          background: #eaeaea;
          cursor: pointer;
        }

        .options button:hover {
          background: #d6d6d6;
        }

        .correct {
          background: #4caf50 !important;
          color: white;
        }

        .wrong {
          background: #f44336 !important;
          color: white;
        }

        .next {
          margin-top: 15px;
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 5px;
          background: #2196f3;
          color: white;
          cursor: pointer;
        }

        .next:disabled {
          background: #aaa;
        }

        .score {
          margin-top: 10px;
          font-weight: bold;
          text-align: center;
        }

        .result {
          text-align: center;
        }
      `}</style>

      <div className="container">
        <div className="quiz">
          {finished ? (
            <div className="result">
              <h2>Quiz Completed 🎉</h2>
              <p>Your Score: {score} / {quizData.length}</p>
            </div>
          ) : (
            <>
              <h3>Question {current + 1}</h3>
              <h2>{quizData[current].question}</h2>

              <div className="options">
                {quizData[current].options.map((option, index) => (
                  <button
                    key={index}
                    disabled={selected !== null}
                    onClick={() => handleAnswer(option)}
                    className={
                      selected === option
                        ? option === quizData[current].answer
                          ? "correct"
                          : "wrong"
                        : ""
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>

              <button
                className="next"
                onClick={nextQuestion}
                disabled={!selected}
              >
                Next
              </button>

              <div className="score">Score: {score}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
