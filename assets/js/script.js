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

//Fun
const question = document.getElementById("question")
const option = Array.from (document.getElementsByClassName("option-text"))

let currentQuestion ={};
let correctAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

