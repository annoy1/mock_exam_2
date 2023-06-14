import React, { useState } from "react";

const Result = ({
  score,
  totalQuestions,
  answers,
  questions,
  handleRestart
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const calculatePercentage = () => {
    return (score / totalQuestions) * 100;
  };

  const getCorrectCount = () => {
    let count = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        count++;
      }
    });
    return count;
  };

  const getIncorrectCount = () => {
    let count = 0;
    answers.forEach((answer, index) => {
      if (answer !== "" && answer !== questions[index].correctAnswer) {
        count++;
      }
    });
    return count;
  };

  const getUnansweredCount = () => {
    let count = 0;
    answers.forEach((answer) => {
      if (answer === "") {
        count++;
      }
    });
    return count;
  };

  return (
    <div className="result">
      <h2>Exam Result</h2>
      <p>
        You scored {score} out of {totalQuestions}.
      </p>
      <p>Percentage: {calculatePercentage()}%</p>
      <div className="question-palette">
        <div className="palette-box correct">
          <span className="box-label">Correct</span>
          <span className="box-value">{getCorrectCount()}</span>
        </div>
        <div className="palette-box incorrect">
          <span className="box-label">Incorrect</span>
          <span className="box-value">{getIncorrectCount()}</span>
        </div>
        <div className="palette-box unanswered">
          <span className="box-label">Unanswered</span>
          <span className="box-value">{getUnansweredCount()}</span>
        </div>
      </div>
      <h3>Question Palette</h3>
      <ul className="answers-list">
        {questions.map((question, index) => (
          <li
            key={index}
            className={`answer ${
              answers[index] === question.correctAnswer
                ? "correct"
                : "incorrect"
            }`}
          >
            <button
              className={`question-number ${
                selectedQuestion === index ? "selected" : ""
              }`}
              onClick={() => setSelectedQuestion(index)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
      {selectedQuestion !== null && (
        <div className="question-details">
          <p>{questions[selectedQuestion].questionText}</p>
          {answers[selectedQuestion] !== "" && (
            <p>
              Your Answer: <span>{answers[selectedQuestion]}</span>
            </p>
          )}
          <p>
            Correct Answer:{" "}
            <span>{questions[selectedQuestion].correctAnswer}</span>
          </p>
          {questions[selectedQuestion].explanation && showExplanation && (
            <p className="explanation">
              Explanation: {questions[selectedQuestion].explanation}
            </p>
          )}
        </div>
      )}
      <button className="restart-button" onClick={handleRestart}>
        Restart Exam
      </button>
      <button
        className="explanation-button"
        onClick={() => setShowExplanation(!showExplanation)}
      >
        {showExplanation ? "Hide Explanation" : "Show Explanation"}
      </button>
    </div>
  );
};

export default Result;
