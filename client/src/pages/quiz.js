<<<<<<< HEAD
import React, { useState } from "react";
import Navbar from "../component/Navbar/index";
import QuizContainer from "../component/QuizContainer/index";
import HeaderOne from "../component/HeaderOne/index";
import HeaderTwo from "../component/HeaderTwo/index";
import QuizQuestionText from "../component/QuizQuestionText/index";
import "./style.css";
=======
import React, {useState} from "react";
import ReactModal from "react-modal";
>>>>>>> 7190949bda896dce9bf9874081de33cd8d8a59f1

const Quiz = () => {
    const questions = [
        {
            question: "When was the US Constitution signed?",
            choices: [
<<<<<<< HEAD
                { option: "June 22, 1788", correct: false },
                { option: "September 17, 1787", correct: true },
                { option: "July 4, 1776", correct: false },
                { option: "March 4, 1789", correct: false }
            ]
=======
                { option: "June 22, 1788", correct: false},
                { option: "September 17, 1787", correct: true},
                { option: "July 4, 1776", correct: false},
                {option: "March 4, 1789", correct: false}
            ],
>>>>>>> 7190949bda896dce9bf9874081de33cd8d8a59f1
        },
        {
            question: "How many articles are in the US Constitution?",
            choices: [
<<<<<<< HEAD
                { option: "10", correct: false },
                { option: "7", correct: true },
                { option: "2", correct: false },
                { option: "15", correct: false }
            ]
=======
                { option: "10", correct: false},
                { option: "7", correct: true},
                { option: "2", correct: false},
                {option: "15", correct: false}
            ],
>>>>>>> 7190949bda896dce9bf9874081de33cd8d8a59f1
        },
        {
            question: "How many amendments does the US Constitution have?",
            choices: [
<<<<<<< HEAD
                { option: "27", correct: true },
                { option: "10", correct: false },
                { option: "32", correct: false },
                { option: "50", correct: false }
            ]
=======
                { option: "27", correct: true},
                { option: "10", correct: false},
                { option: "32", correct: false},
                {option: "50", correct: false}
            ],
>>>>>>> 7190949bda896dce9bf9874081de33cd8d8a59f1
        },
        {
            question: "Does the constitution have spelling errors?",
            choices: [
<<<<<<< HEAD
                { option: "True", correct: true },
                { option: "False", correct: false },
            ]
=======
                { option: "True", correct: true},
                { option: "False", correct: false},
            ],
>>>>>>> 7190949bda896dce9bf9874081de33cd8d8a59f1
        },
        {
            question: "The constitution had a bill of rights when it was ratified.",
            choices: [
<<<<<<< HEAD
                { option: "True", correct: false },
                { option: "False", correct: true },
            ]
=======
                { option: "True", correct: false},
                { option: "False", correct: true},
            ],
>>>>>>> 7190949bda896dce9bf9874081de33cd8d8a59f1
        },
        {
            question: "About how long did it take to write the constitution?",
            choices: [
<<<<<<< HEAD
                { option: "10 years", correct: false },
                { option: "2 weeks", correct: false },
                { option: "4 months", correct: true },
                { option: "1 year", correct: false }
            ]
=======
                { option: "10 years", correct: false},
                { option: "2 weeks", correct: false},
                { option: "4 months", correct: true},
                {option: "1 year", correct: false}
            ],
>>>>>>> 7190949bda896dce9bf9874081de33cd8d8a59f1
        },
        {
            question: "Who did not help write the constitution?",
            choices: [
<<<<<<< HEAD
                { option: "Benjamin Franklin", correct: false },
                { option: "Alexander Hamilton", correct: false },
                { option: "James Madison", correct: false },
                { option: "Thomas Jefferson", correct: true }
            ]
=======
                { option: "Benjamin Franklin", correct: false},
                { option: "Alexander Hamilton", correct: false},
                { option: "James Madison", correct: false},
                {option: "Thomas Jefferson", correct: true}
            ],
>>>>>>> 7190949bda896dce9bf9874081de33cd8d8a59f1
        },
        {
            question: "How many words are in the constitution?",
            choices: [
<<<<<<< HEAD
                { option: "10,000", correct: false },
                { option: "2,360", correct: false },
                { option: "4,543", correct: true },
                { option: "5,201", correct: false }
            ]
=======
                { option: "10,000", correct: false},
                { option: "2,360", correct: false},
                { option: "4,543", correct: true},
                {option: "5,201", correct: false}
            ],
>>>>>>> 7190949bda896dce9bf9874081de33cd8d8a59f1
        },
        {
            question: "Which amendment to the constitution was repealed?",
            choices: [
<<<<<<< HEAD
                { option: "2nd amendment", correct: false },
                { option: "18th amendment", correct: true },
                { option: "10th amendment", correct: false },
                { option: "14th amendment", correct: false }
            ]
=======
                { option: "2nd amendment", correct: false},
                { option: "18th amendment", correct: true},
                { option: "10th amendment", correct: false},
                {option: "14th amendment", correct: false}
            ],
>>>>>>> 7190949bda896dce9bf9874081de33cd8d8a59f1
        },
        {
            question: "When was the constitution last amended?",
            choices: [
<<<<<<< HEAD
                { option: "October 7, 1789", correct: false },
                { option: "January 20, 1852", correct: false },
                { option: "July 4, 1910", correct: false },
                { option: "May 5, 1992", correct: true }
            ]
        }
=======
                { option: "October 7, 1789", correct: false},
                { option: "January 20, 1852", correct: false},
                { option: "July 4, 1910", correct: false},
                {option: "May 5, 1992", correct: true}
            ],
        },
>>>>>>> 7190949bda896dce9bf9874081de33cd8d8a59f1
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [finalScore, setFinalScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (correct) => {
        if (correct) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setFinalScore(true);
        }
    };

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true)
    };

    const handleCloseModal = () => {
        setShowModal(false)
    };

    return (
<<<<<<< HEAD
        <>
        <Navbar />
            <QuizContainer>
                <HeaderOne>Quiz</HeaderOne>
                <hr />
                {finalScore ? (
                    <HeaderTwo>
                        You scored a {score}, getting {questions.length} of 10 questions right.
                    </HeaderTwo>
                ) : (
                        <div>
                            <div className="question-section">
                                <HeaderTwo>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </HeaderTwo>
                                <QuizQuestionText>{questions[currentQuestion].question}</QuizQuestionText>
                            </div>
                            <div className="question-choices">
                                {questions[currentQuestion].choices.map((choices) => (
                                    <button className="quiz-choice-button" onClick={() => handleAnswerButtonClick(choices.correct)}>{choices.option}</button>))}
                            </div>
                        </div>
                    )}
            </QuizContainer>
        </>
=======
        <div className="container">
            <div className="quiz">
            {finalScore ? (
                <div className="score-section">
                    You scored a {score * 10}, getting {score} of 10 questions right.
                </div>
                ) : (
                    <div>
                        <div className="question-section">
                            <div className="question-count">
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className="question-text">{questions[currentQuestion].question}</div>
                        </div>
                        <div className="question-choices">
                            {questions[currentQuestion].choices.map((choice) => (
                                <button onClick={() => handleAnswerButtonClick(choice.correct)}>{choice.option}</button>))}
                        </div>
                    </div>
                )}
            </div>
            <div className="highscores">
                <button onClick={handleOpenModal}>HighScore List</button>
                <ReactModal
                    isOpen={showModal}
                >
                    <h1 className="text-center">HighScores</h1>
                    <p>{score * 10}</p>
                    <button onClick={handleCloseModal}>Close</button>
                </ReactModal>
            </div>
        </div>
>>>>>>> 7190949bda896dce9bf9874081de33cd8d8a59f1
    )

}

export default Quiz;