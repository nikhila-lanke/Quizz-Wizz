const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highscores=JSON.parse(localStorage.getItem('highscores')) || [];

const MAX_HIGHSCORES=5

finalScore.innerText=mostRecentScore;
username.addEventListener("keyup",()=>{
    saveScoreBtn.disabled=!username.value;
});

saveHighScore = (e)=>{
    e.preventDefault();
    const score ={
    score: mostRecentScore,
    name: username.value
    };
    highscores.push(score);
    
    highscores.sort((a,b)=>b.score-a.score);
    highscores.splice(5);

    localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.assign("index.html");
};

