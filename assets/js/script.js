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

//Function for the questions

//  CONSTANTS

const quizQuestions = document.getElementById('quiz-questions');
const quizOptions =document.getElementById('quiz-options');
const nextQuestion = document.getElementById('next-btn');
const movieReveal = document.getElementById('movieReveal');

