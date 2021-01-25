import React, { useState } from "react";
import ReactModal from "react-modal";
import Navbar from "../component/Navbar/index";
import Container from "../component/Container/index";
import QuizQuestionSpan from "../component/QuizQuestionSpan/index";
import QuizQuestionText from "../component/QuizQuestionText/index";
import HeaderOne from "../component/HeaderOne/index";
import HeaderTwo from "../component/HeaderTwo/index";
import QuizContainer from "../component/QuizContainer/index";
import "./style.css";


const Quiz = () => {
    const questions = [
        {
            question: "When was the US Constitution signed?",
            choices: [
                { option: "June 22, 1788", correct: false },
                { option: "September 17, 1787", correct: true },
                { option: "July 4, 1776", correct: false },
                { option: "March 4, 1789", correct: false }
            ],
        },
        {
            question: "How many articles are in the US Constitution?",
            choices: [
                { option: "10", correct: false },
                { option: "7", correct: true },
                { option: "2", correct: false },
                { option: "15", correct: false }
            ],
        },
        {
            question: "How many amendments does the US Constitution have?",
            choices: [
                { option: "27", correct: true },
                { option: "10", correct: false },
                { option: "32", correct: false },
                { option: "50", correct: false }
            ],
        },
        {
            question: "Does the constitution have spelling errors?",
            choices: [
                { option: "True", correct: true },
                { option: "False", correct: false },
            ],
        },
        {
            question: "The constitution had a bill of rights when it was ratified.",
            choices: [
                { option: "True", correct: false },
                { option: "False", correct: true },
            ],
        },
        {
            question: "About how long did it take to write the constitution?",
            choices: [
                { option: "10 years", correct: false },
                { option: "2 weeks", correct: false },
                { option: "4 months", correct: true },
                { option: "1 year", correct: false }
            ],
        },
        {
            question: "Who did not help write the constitution?",
            choices: [
                { option: "Benjamin Franklin", correct: false },
                { option: "Alexander Hamilton", correct: false },
                { option: "James Madison", correct: false },
                { option: "Thomas Jefferson", correct: true }
            ],
        },
        {
            question: "How many words are in the constitution?",
            choices: [
                { option: "10,000", correct: false },
                { option: "2,360", correct: false },
                { option: "4,543", correct: true },
                { option: "5,201", correct: false }
            ],
        },
        {
            question: "Which amendment to the constitution was repealed?",
            choices: [
                { option: "2nd amendment", correct: false },
                { option: "18th amendment", correct: true },
                { option: "10th amendment", correct: false },
                { option: "14th amendment", correct: false }
            ],
        },
        {
            question: "When was the constitution last amended?",
            choices: [
                { option: "October 7, 1789", correct: false },
                { option: "January 20, 1852", correct: false },
                { option: "July 4, 1910", correct: false },
                { option: "May 5, 1992", correct: true }
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [finalScore, setFinalScore] = useState(false);
    const [score, setScore] = useState([]);

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

    // const saveScores = (e) => {

    // };

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true)
    };

    const handleCloseModal = () => {
        setShowModal(false)
    };

    const customStyles = {
        overlay: {
            width: "50%",
            height: "60%",
            display: "flexbox",
            margin: "auto",
            overflow: "hidden"
        }
    };

    return (
        <>
            <Navbar />
            <Container>
                <HeaderOne>Quiz</HeaderOne>
                {finalScore ? (
                    <Container>
                        You scored a {score * 10}, getting {score} of 10 questions right.
                    </Container>
                ) : (
                        <Container>
                            <QuizContainer>
                                <HeaderTwo>
                                    <QuizQuestionSpan>Question {currentQuestion + 1}</QuizQuestionSpan>/{questions.length}
                                </HeaderTwo>
                                <QuizQuestionText>{questions[currentQuestion].question}</QuizQuestionText>
                            </QuizContainer>
                            <Container>
                                {questions[currentQuestion].choices.map((choice) => (
                                    <button className="quiz-choice-button" onClick={() => handleAnswerButtonClick(choice.correct)}>{choice.option}</button>))}
                            </Container>
                        </Container>
                    )}
            </Container>
            <Container>
                <button id="quiz-highscore-button" onClick={handleOpenModal}>HighScore List</button>
                <ReactModal 
                    isOpen={showModal}
                    style={customStyles}
                    >
                    <Container>
                        <HeaderOne>HighScores</HeaderOne>
                        <Container>
                            <p id="new-high-score">{score * 10}</p>
                            <button id="close-modal" onClick={handleCloseModal}>Close</button>
                        </Container>
                    </Container>
                </ReactModal>
            </Container>
        </>
    )

}

export default Quiz;