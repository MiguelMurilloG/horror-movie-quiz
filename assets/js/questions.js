const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option-text"));
const progressBar = document.getElementById("progress-bar");
const userscore = document.getElementById("user-score");
const endMessage = document.getElementById("end-message-text");
const questionTracker = document.getElementById ("question-tracker");

let currentQuestion = {};
let correctAnswer = false;
let score = 0;
let questionCounter = 0;
let remainingQuestions = [];

// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

//Array of questions
const questions = [
    {
        question: "In 'The Exorcist', directed by William Friedkin, what is the name of the possessed girl?",
        options: ["Emily", "Sarah", "Regan", "Linda"],
        answer: 2,
    },
    {
        question: "Which horror movie tells the story of a girl who gets a cursed videotape and is told she will die in seven days?",
        options: ["Scream", "The Conjuring", "Halloween", "The Ring"],
        answer: 3,
    },
    {
        question: "The Texas Chainsaw Massacre's Leatherface wears a mask made from what?",
        options: ["Leather", "Skin", "Plastic", "Wool"],
        answer: 1,
    },
    {
        question: "What popular horror movie was the first feature of Freddy Krueger?",
        options: ["A Nightmare on Elm Street", "Hellraiser", "Dracula", "Pet Sematary"],
        answer: 0,
    },
    {
        question: "What real-life incident is 'Poltergeist' rumored to have been inspired by?",
        options: ["A haunted house in England", "The Amityville Horror case", "The Enfield Poltergeist", "The Bermuda Triangle phenomenon"],
        answer: 2,
    }
];

startGame = () => {
    questionCounter = 0;
    score = 0;
    remainingQuestions = [...questions];
    console.log(remainingQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (remainingQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // End the game
        return;
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * remainingQuestions.length);
    currentQuestion = remainingQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    
    // Set options text
    options.forEach((option, index) => {
        option.innerText = currentQuestion.options[index];
    });
    
    // Remove the selected question from the remaining questions array
    remainingQuestions.splice(questionIndex, 1);

     correctAnswer = true;
}

options.forEach(option =>{
    option.addEventListener ("click", e =>{
        if (!correctAnswer) return;

        correctAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"]
        console.log(selectedAnswer)
        getNewQuestion ();

    });

    });

startGame();
