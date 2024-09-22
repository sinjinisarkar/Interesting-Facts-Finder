const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);

highScoresList.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
.join("");


// local storage is not secure
// save it in a database using api
// limited time so i will implement that later in the future