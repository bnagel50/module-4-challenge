var startButton = document.querySelector(".glow-on-hover");
var timerElement = document.querySelector(".timer-count");
var quizContainer = document.querySelector(".quiz");
var scoreContainer = document.querySelector(".score");
var saveButton = document.querySelector(".save-button");
var timer;
var timerCount;

var score = 0
var questionNumber = 0
var scorePoints = 0;

var quizQuestions = [
    {
        question: "What type of file is a script?",
        answers: {
            a: ".css",
            b: ".html",
            c: ".js",
            d: ".doc",
        },
        correctAnswer: "c"
    },

    {
        question: "What can JavaScript be used for?",
        answers: {
            a: "cooking",
            b: "interactive web content",
            c: "cleaning",
            d: "driving",
        },
        correctAnswer: "b"
    },

    {
        question: "What color is the JS logo in VS Code?",
        answers: {
            a: "yellow",
            b: "blue",
            c: "green",
            d: "purple",
        },
        correctAnswer: "a"
    },

    {
        question: "What is another name for a list used in JS?",
        answers: {
            a: "stack",
            b: "check",
            c: "words",
            d: "array",
        },
        correctAnswer: "d"
    },

    {
        question: "When was JS created?",
        answers: {
            a: "1880",
            b: "1965",
            c: "2020",
            d: "1995",
        },
        correctAnswer: "d"
    }
];

function createQuiz() {
    var output = [];
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        var answers = [];
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]} </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');

    score = 0
    availableQuestions = [quizQuestions]
    timerCount = 60;
    acceptingAnswers = true
    startTimer()
    getNewQuestion()
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            acceptingAnswers = false;
        }
    }, 1000)
}

function getNewQuestion() {

}

function saveResults() {
    score.textContent = score;
    localStorage.setItem("scoreCount", score)
}

function getScore() {
    var storedScore = localStorage.getItem("scoreCount");
    if (storedScore === 0) {
        score = 0
    } else {
        score = storedScore
    }
    score.textContent = score;
}

startButton.addEventListener('click', createQuiz);

saveButton.addEventListener('click', saveResults);