// Get DOM elements
const questionElement = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option-text"));
const endMessageContainer = document.getElementById("quiz-end");
const endMessage = document.getElementById("end-message-text");
const gameContainer = document.getElementById("game");
const scoreText = document.getElementById("user-score"); // Updated to correctly target the score display element

// Variables to track quiz state
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let remainingQuestions = [];

// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

// Array of questions
const questions = [
    {
        question: "In 'The Exorcist', directed by William Friedkin, what is the name of the possessed girl?",
        options: ["Emily", "Sarah", "Regan", "Linda"],
        answer: 3,
    },
    {
        question: "Which horror movie tells the story of a girl who gets a cursed videotape and is told she will die in seven days?",
        options: ["Scream", "The Conjuring", "Halloween", "The Ring"],
        answer: 4,
    },
    {
        question: "The Texas Chainsaw Massacre's Leatherface wears a mask made from what?",
        options: ["Leather", "Skin", "Plastic", "Wool"],
        answer: 2,
    },
    {
        question: "What popular horror movie was the first feature of Freddy Krueger?",
        options: ["A Nightmare on Elm Street", "Hellraiser", "Dracula", "Pet Sematary"],
        answer: 1,
    },
    {
        question: "What real-life incident is 'Poltergeist' rumored to have been inspired by?",
        options: ["A haunted house in England", "The Amityville Horror case", "The Enfield Poltergeist", "The Bermuda Triangle phenomenon"],
        answer: 3,
    }
];


// Function to start the quiz
function startQuiz() {
    questionCounter = 0;
    score = 0;
    remainingQuestions = [...questions];
    getNewQuestion();
}

// Function to get a new question
function getNewQuestion() {
    if (remainingQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        endQuiz();
        return;
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * remainingQuestions.length);
    currentQuestion = remainingQuestions.splice(questionIndex, 1)[0];
    questionElement.innerText = currentQuestion.question;

    options.forEach((option, index) => {
        option.innerText = currentQuestion.options[index];
    });

    acceptingAnswers = true;
}

// Function to end the quiz
function endQuiz() {
    // Hide the question element
    gameContainer.style.display = "none";

    // Hide the options
    const optionContainers = document.querySelectorAll('.option-container');
    optionContainers.forEach(container => {
        container.style.display = "none";
    });

    // Display end message
    endMessage.textContent = "The darkness has consumed you. Quiz ended.";
    endMessageContainer.style.display = "block";
    const playAgainButton = document.getElementById("play-again-btn");
    playAgainButton.addEventListener("click", () => {
        endMessageContainer.style.display = "none";
        gameContainer.style.display = "block";
       
    });
}

// Event listeners for option selection
options.forEach((option) => {
    option.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedOption = e.target;
        const selectedAnswer = parseInt(selectedOption.dataset["number"]); // Parse the dataset number as integer

        // Check answers if they are correct or incorrect
        const checkAnswer = selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect';

        if (checkAnswer === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedOption.classList.add(checkAnswer);
        setTimeout(() => {
            selectedOption.classList.remove(checkAnswer);
            getNewQuestion(); // Call getNewQuestion to proceed to the next question
        }, 1000);
    });
});

// Function to increment the score
function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}

// Start the quiz when the page loads
startQuiz();
