const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const hightscore = JSON.parse(localStorage.getItem("hightscore")) || [];
console.log(hightscore);
finalScore.innerText = mostRecentScore;

if (mostRecentScore<=10){

    finalScore.style.color ='red';
    finalScore.style.fontWeight = 'bold';
    
}
else if (mostRecentScore<=50){

    finalScore.style.color = 'orange';
    finalScore.style.fontWeight = 'bold';
    
}
else{

    finalScore.style.color = 'green';
    finalScore.style.fontWeight = 'bold';
    
}

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});


SaveHighScore = (e) => {
    e.preventDefault();
    const score = {
        name: username.value,
        score: mostRecentScore
    };
    
    hightscore.push(score);
    hightscore.sort((a, b) => a.score-b.score);
    hightscore.splice(5);
    
    localStorage.setItem('hightscore', JSON.stringify(hightscore));  
    window.location.assign("/");
};