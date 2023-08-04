const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const word1 = document.getElementById('word1');
finalScore.innerText = mostRecentScore;

if (mostRecentScore<=10){

    finalScore.style.color ='red';
    finalScore.style.fontWeight = 'bold';
    word1.innerText="Bien essayer reviser plus";
}
else if (mostRecentScore<=50){

    finalScore.style.color = 'orange';
    finalScore.style.fontWeight = 'bold';
    word1.innerText="Pas mal";
}
else{

    finalScore.style.color = 'green';
    finalScore.style.fontWeight = 'bold';
    word1.innerText="Parfait";
}

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
};