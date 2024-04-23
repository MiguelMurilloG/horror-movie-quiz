// Function to open the instructions
function openInstructions() {
    var instructionBox = document.getElementById("quiz-instruction");
    instructionBox.style.display = "block";
}

// Function to close the instructions
function closeInstructions() {
    var instructionBox = document.getElementById("quiz-instruction");
    instructionBox.style.display = "none";
}

// Event listener for opening the instructions
document.getElementById("instructions-btn").addEventListener("click", openInstructions);

// Event listener for closing the instructions
document.getElementById("close-instructions-btn").addEventListener("click", closeInstructions);



//  CONSTANTS

const quizQuestions = document.getElementById('quiz-questions');
const quizOptions =document.getElementById('quiz-options');
const nextQuestion = document.getElementById('next-btn');
const movieReveal = document.getElementById('movieReveal');

let quizIndex = 0;
let score = 0;
let progress = 1;


//Function fot the start the quiz

function startGame() {
    shuffleQuiz(askQuiz);
    askQuiz.splice(4, askQuiz.length - 4)
    quizIndex =0;
    score = 0;
    nextQuestion.innerHTML = 'Next';
    showQuestion();
    document.getElementById('quiz-progress').style.display ='block';
    document.getElementById('quiz-progress').innerHTML = `Question ${numOfNum} of 5`;
}

// Questions

function shuffleQuiz(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//Function to show the questions

function showQuestion (){
    quizQuestions.innerHTML = '';
    movieReveal.innerHTML = '';
    replaceActual ();
    let currentQuestion = askQuiz[quizIndex];
    quizQuestions.innerHTML = currentQuestion.question;
}
