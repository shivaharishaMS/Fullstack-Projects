import { useState } from "react";

export default function Poll() {
  const pollQuestion = "Which topic should we revise today?";
  const pollOptions = ["React Hooks", "JavaScript ES6", "CSS Flexbox", "APIs"];

  const [votes, setVotes] = useState(
    pollOptions.reduce((acc, opt) => ({ ...acc, [opt]: 0 }), {})
  );
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const vote = (option) => {
    if (hasVoted) return;

    setVotes({ ...votes, [option]: votes[option] + 1 });
    setHasVoted(true);
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f2f4f7;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .poll {
          background: #fff;
          width: 380px;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        h2 {
          margin-bottom: 20px;
          text-align: center;
        }

        .option {
          margin-bottom: 15px;
        }

        .option button {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 5px;
          background: #2196f3;
          color: white;
          cursor: pointer;
          font-size: 14px;
        }

        .option button:disabled {
          background: #aaa;
        }

        .bar {
          height: 10px;
          background: #e0e0e0;
          border-radius: 5px;
          margin-top: 6px;
        }

        .fill {
          height: 100%;
          background: #4caf50;
          border-radius: 5px;
          transition: width 0.4s ease;
        }

        .percent {
          font-size: 12px;
          margin-top: 4px;
          text-align: right;
        }

        .footer {
          margin-top: 20px;
          text-align: center;
          font-weight: bold;
        }
      `}</style>

      <div className="container">
        <div className="poll">
          <h2>{pollQuestion}</h2>

          {pollOptions.map((option, index) => {
            const count = votes[option];
            const percentage = totalVotes
              ? Math.round((count / totalVotes) * 100)
              : 0;

            return (
              <div className="option" key={index}>
                <button onClick={() => vote(option)} disabled={hasVoted}>
                  {option}
                </button>

                <div className="bar">
                  <div
                    className="fill"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                <div className="percent">
                  {count} votes ({percentage}%)
                </div>
              </div>
            );
          })}

          <div className="footer">
            Total Votes: {totalVotes}
          </div>
        </div>
      </div>
    </>
  );
}
