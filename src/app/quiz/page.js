"use client";
import React, { useState } from 'react';
import Link from "next/link";

const questions = [
  {
    question: "Which function is used to display output in Python?",
    options: ["print()", "echo()", "console.log()", "printf()"],
    correctAnswer: "print()",
    explanation: "In Python, the `print()` function is used to display output on the screen."
  },
  {
    question: "What is the correct file extension for Python files?",
    options: [".py", ".pt", ".pyt", ".python"],
    correctAnswer: ".py",
    explanation: "Python files use the `.py` extension."
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["def", "function", "fun", "lambda"],
    correctAnswer: "def",
    explanation: "Functions in Python are defined using the `def` keyword."
  },
  {
    question: "What is the output of: `print(type(10))`?",
    options: ["<class 'int'>", "<class 'float'>", "<class 'number'>", "<class 'string'>"],
    correctAnswer: "<class 'int'>",
    explanation: "The number `10` is an integer, so Python shows its type as `<class 'int'>`."
  },
  {
    question: "Which of these is a valid variable name in Python?",
    options: ["2name", "first_name", "first-name", "class"],
    correctAnswer: "first_name",
    explanation: "Python variable names must start with a letter or underscore and cannot use reserved keywords like `class`."
  },
  {
    question: "What will this code output? `print(3 * 'Hi')`",
    options: ["HiHiHi", "3Hi", "Error", "Hi 3 times"],
    correctAnswer: "HiHiHi",
    explanation: "The `*` operator with a string repeats the string. So `'Hi' * 3` prints `HiHiHi`."
  },
  {
    question: "How do you insert comments in Python?",
    options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
    correctAnswer: "# comment",
    explanation: "In Python, comments start with a `#` symbol."
  },
  {
    question: "Which of these is NOT a Python data type?",
    options: ["list", "tuple", "dictionary", "array"],
    correctAnswer: "array",
    explanation: "Python has lists, tuples, and dictionaries as built-in types. Arrays require importing a library like `array` or NumPy."
  },
  {
    question: "What will `print(bool(0))` output?",
    options: ["True", "False", "0", "None"],
    correctAnswer: "False",
    explanation: "In Python, `0` is considered False when converted to a boolean."
  },
  {
    question: "Which keyword is used to create a class in Python?",
    options: ["object", "def", "class", "struct"],
    correctAnswer: "class",
    explanation: "In Python, classes are defined using the `class` keyword."
  }
];

const PythonQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    const correct = option === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(-1); // End of quiz
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(false);
    setSelectedOption(null);
  };

  return (
    <>
      <div className="card-body">
        <h1 className="quiz-title">🐍 Python Basics Quiz</h1>
        <p className="quiz-description">
          Test your knowledge of Python fundamentals with this interactive quiz! 
          Answer questions on syntax, variables, functions, and more. Get instant feedback and learn as you go!
        </p>

        {currentQuestion === -1 ? (
          <div className="quiz-result">
            <h2 className="quiz-title text-2xl">Quiz Complete!</h2>
            <p className="quiz-description">
              Your score: <span className="font-bold">{score}</span> out of {questions.length}
            </p>
            <p className="quiz-description">
              {score === questions.length
                ? "Perfect score! You're a Python pro! 🐍"
                : score >= questions.length / 2
                ? "Great job! You're getting the hang of Python basics."
                : "Keep practicing! Try again to improve your score."}
            </p>
            <button className="quiz-button" onClick={handleRestart}>
              Restart Quiz
            </button>
            <a
              href="https://your-store.com/python-guide" // Updated purchase link
              className="quiz-buy-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More with Python Guide
            </a>
          </div>
        ) : (
          <div className="quiz-question">
            <h2 className="quiz-title text-2xl">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <p className="quiz-description font-medium">{questions[currentQuestion].question}</p>
            <div className="quiz-options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`quiz-option-button ${
                    showFeedback && selectedOption === option
                      ? isCorrect
                        ? 'correct'
                        : 'incorrect'
                      : ''
                  }`}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                >
                  {option}
                </button>
              ))}
            </div>
            {showFeedback && (
              <div className="quiz-feedback">
                <p className={isCorrect ? 'text-green-400' : 'text-red-400'}>
                  {isCorrect ? 'Correct!' : 'Incorrect!'}
                </p>
                <p className="quiz-description">{questions[currentQuestion].explanation}</p>
                <button className="quiz-button" onClick={handleNext}>
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                </button>
              </div>
            )}
            <p className="quiz-score">Score: {score}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PythonQuiz;
