// Get DOM elements
const questionElement = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option-text"));
const endMessageContainer = document.getElementById("quiz-end");
const endMessage = document.getElementById ("end-message-text")
const gameContainer = document.getElementById("game");
const userScore = parseInt(localStorage.getItem('userScore'));

// Variables to track quiz state
let currentQuestion = {};
let questionCounter = 0;
let remainingQuestions = [];

// CONSTANTS
const  CORRECT_BONUS =10;
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
    remainingQuestions = [...questions];
    getNewQuestion();
}

// Function to get a new question
function getNewQuestion() {
    if (remainingQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // End the game
        endQuiz();
        return;
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * remainingQuestions.length);
    currentQuestion = remainingQuestions[questionIndex];
    questionElement.innerText = currentQuestion.question;

    // Set options text
    options.forEach((option, index) => {
        option.innerText = currentQuestion.options[index];
    });

    // Remove the selected question from the remaining questions array
    remainingQuestions.splice(questionIndex, 1);
}

// Function to end the quiz
function endQuiz() {
    // Hide the question element
    gameContainer.style.display = "none";

    // Hide the options
    options.forEach(option => {
        option.style.display = "none";
    });

   

    // Display end message
    endMessage.textContent = "The darkness has consumed you. Quiz ended.";
    endMessageContainer.style.display = "block";
    const playAgainButton = document.getElementById("play-again-btn");
    playAgainButton.addEventListener ("click", startQuiz);
   
 
   
    
}

// Event listeners for option selection
options.forEach(option => {
    option.addEventListener("click", e => {
        const selectedChoice = e.target;
        const selectedAnswer = parseInt(selectedChoice.dataset["number"]); 

        // Check answers
        const checkAnswer = selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect'; 
     

        // Add class to indicate correct or incorrect answer
        selectedChoice.classList.add(checkAnswer);

        setTimeout(() => {
            selectedChoice.classList.remove(checkAnswer);
            getNewQuestion();
        }, 1000);
    });
});

// Start the quiz

    startQuiz();
