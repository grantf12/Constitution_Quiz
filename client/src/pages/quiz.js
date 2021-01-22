import React, {useState} from "react";

const quiz = () => {
    const questions = [
        {
            question: "What is JavaScript?",
            choices: [
                { option: "coffee", correct: false},
                { option: "a potentially brutal programming language", correct: true},
                { option: "religious text", correct: false},
                {option: "a type of paper", correct: false}
            ]
        },
        {
            question: "Variables in JavaScript can contain what?",
            choices: [
                { option: "string only", correct: false},
                { option: "nothing", correct: false},
                { option: "numbers only", correct: false},
                {option: "all of the above", correct: true}
            ]
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [finalScore, setFinalScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (correct) => {
        if (correct) {
            setScore(score + 10);
        }

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setFinalScore(true);
        }
    };

    return (
        <div className="quiz">
        {finalScore ? (
            <div className="score-section">
                You scored a {score}, getting {questions.length} of 10 questions right.
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
                        {questions[currentQuestion].choices.map((choices) => (
                            <button onClick={() => handleAnswerButtonClick(choices.correct)}>{choices.option}</button>))}
                    </div>
                </div>
            )}
        </div>
    )

}

export default quiz;