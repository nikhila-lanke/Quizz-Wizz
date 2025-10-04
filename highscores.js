const highscoresList = document.getElementById('highscoresList');
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

highscoresList.innerHTML= highscores.map(score=>{
    return `<li class="highscores">${score.name} - ${score.score}</li>`;
}).join("")