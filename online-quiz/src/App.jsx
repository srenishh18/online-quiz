
import React, { useState } from "react";
import "./App.css";

function App() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      question: "1. Which language is used for React?",
      options: ["Python", "JavaScript", "C", "Java"],
      answer: "JavaScript",
      type: "mcq"
    },
    {
      question: "2. Which HTML tag is used for a paragraph?",
      options: ["<h1>", "<p>", "<div>", "<br>"],
      answer: "<p>",
      type: "mcq"
    },
    {
      question: "3. React is a ______ library.",
      answer: "JavaScript",
      type: "blank"
    },
    {
      question: "4. CSS stands for ______ Style Sheets.",
      answer: "Cascading",
      type: "blank"
    }
  ];

  const handleChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = questions.filter(
    (q, index) =>
      answers[index]?.trim().toLowerCase() ===
      q.answer.toLowerCase()
  ).length;

  return (
    <div className="container">
      <h1>Online Quiz</h1>
      <p>Answer all the questions</p>

      {questions.map((q, index) => (
        <div className="question" key={index}>
          <h3>{q.question}</h3>

          {q.type === "mcq" ? (
            q.options.map((option, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name={"question" + index}
                  value={option}
                  disabled={submitted}
                  onChange={() =>
                    handleChange(index, option)
                  }
                />
                {option}
                <br />
              </label>
            ))
          ) : (
            <input
              type="text"
              placeholder="Enter your answer"
              value={answers[index] || ""}
              disabled={submitted}
              onChange={(e) =>
                handleChange(index, e.target.value)
              }
            />
          )}
        </div>
      ))}

      {!submitted ? (
        <button onClick={handleSubmit}>
          Submit Quiz
        </button>
      ) : (
        <h2>
          Your Score: {score} / {questions.length}
        </h2>
      )}
    </div>
  );
}

export default App;
