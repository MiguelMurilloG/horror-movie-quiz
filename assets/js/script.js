let instructionBox = document.getElementById("quiz-instructions");

function openInstructions() {
    document.getElementById('start-button').style.display = 'none';
    instructionBox.classList.add("open-box");
}

function closeInstructions() {
    instructionBox.classList.remove("open-box");
    document.getElementById('start-button').style.display = 'block';
}
