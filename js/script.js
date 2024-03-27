// Function to toggle the display of answers
function toggleAnswer(answerId) {
    var answerDiv = document.getElementById(answerId);
    if (answerDiv.style.display === "none") {
        answerDiv.style.display = "block";
    } else {
        answerDiv.style.display = "none";
    }
}
