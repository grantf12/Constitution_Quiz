import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import Navbar from "../component/Navbar/index";
import QuizWrapper from "../component/QuizWrapper/index"
import Container from "../component/Container/index";
import QuizContainer from "../component/QuizContainer/index";
import QuizQuestionContainer from "../component/QuizQuestionContainer/index";
import QuizResultsContainer from "../component/QuizResultsContainer/index";
import QuizQuestionChoicesContainer from "../component/QuizQuestionChoicesContainer/index";
import ModalContainer from "../component/ModalContainer/index";
import ModalHeader from "../component/ModalHeader/index";
import CurrentHighScore from "../component/CurrentHighScore/index";
import Footer from "../component/Footer/index";
import QuizQuestionSpan from "../component/QuizQuestionSpan/index";
import QuizQuestionText from "../component/QuizQuestionText/index";
import HeaderOne from "../component/HeaderOne/index";
import HeaderTwo from "../component/HeaderTwo/index";
import Paragraph from "../component/Paragraph/index";
import "./style.css";
import axios from "axios";
import UnorderedList from "../component/HighscoreUnorderedList";


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
            question: "The constitution has spelling errors.",
            choices: [
                { option: "True", correct: true },
                { option: "False", correct: false },
            ],
        },
        {
            question: "The constitution had a bill of rights when it was first signed.",
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
            question: "Who did not sign the constitution?",
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
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (currentQuestion === questions.length) {
            axios
                .post("/user/score", {
                    score
                }).then(() => {
                    setFinalScore(true);
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [currentQuestion]);

    const handleAnswerButtonClick = (correct) => {
        setCurrentQuestion(currentQuestion + 1);
        if (correct && !finalScore) {
            setScore(score + 10);
        }
    };

    const [showModal, setShowModal] = useState(false);
    const [records, setRecords] = useState([]);

    const handleOpenModal = () => {
        setShowModal(true);
        axios
            .get("/user/score")
            .then((res) => {
                console.log(res.data);
                setRecords(res.data);
            })
            .catch(() => {
                console.log("Error!");
            })
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
            <QuizWrapper>
                <QuizContainer>
                    <HeaderOne>Quiz</HeaderOne>
                    {finalScore || currentQuestion >= questions.length ? (
                        <QuizResultsContainer>
                            You scored a {score}, getting {Math.floor(score / 10)} of 10 questions right.
                        </QuizResultsContainer>
                    ) : (
                            <QuizContainer>
                                <QuizQuestionContainer>
                                    <HeaderTwo>
                                        <QuizQuestionSpan>Question {currentQuestion + 1}</QuizQuestionSpan>/{questions.length}
                                    </HeaderTwo>
                                    <QuizQuestionText>{questions[currentQuestion].question}</QuizQuestionText>
                                </QuizQuestionContainer>
                                <QuizQuestionChoicesContainer>
                                    {questions[currentQuestion].choices.map((choice) => (
                                        <button key={choice.option} className="quiz-choice-button" onClick={() => handleAnswerButtonClick(choice.correct)}>{choice.option}</button>))}
                                </QuizQuestionChoicesContainer>
                            </QuizContainer>
                        )}
                </QuizContainer>
                <QuizContainer>
                    <button id="quiz-highscore-button" onClick={handleOpenModal}>HighScore List</button>
                    <ReactModal
                        isOpen={showModal}
                        style={customStyles}
                        ariaHideApp={false}
                    >
                        <ModalContainer>
                            <ModalHeader>HighScores</ModalHeader>
                            <ModalContainer>
                                <CurrentHighScore>
                                    <div className="row">
                                        <h3 className="col-sm-6">Highest Score
                                            {Math.max(records.map((record, index) =>
                                                <h3 key={index}>{record}%</h3>))}
                                        </h3>
                                        <h4 className="col-sm-6">Current Attempt
                                            <h4>{score}%</h4>
                                        </h4>
                                    </div>
                                    <UnorderedList>
                                        {records.map((record, index) =>
                                            <li key={index}>{record}%</li>
                                        )}
                                    </UnorderedList>
                                </CurrentHighScore>
                                <button id="close-modal" onClick={handleCloseModal}>Close</button>
                            </ModalContainer>
                        </ModalContainer>
                    </ReactModal>
                </QuizContainer>
            </QuizWrapper>
            <Footer>The Constitution Quiz</Footer>
        </>
    )
}

export default Quiz;