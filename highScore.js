const highScorelist = document.getElementById('highScorelist');
const hightscore = JSON.parse(localStorage.getItem('hightscore')) || [];

highScorelist.innerHTML=hightscore.map(score=>{
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join("");
