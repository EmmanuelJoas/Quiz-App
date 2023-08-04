/*CONSTS*/
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));
//const questionCounterText = document.getElementById('questionCounter');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBarFull');
const scoreText = document.getElementById('score');

/*VARIABLE*/
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = []
let questions = 
[
    {
        question: "Quel sont les elements disponibles avant la virtualisation ?",

        choices1: "écran,clavier,souris,imprimente", 
        choices2: "espace Disque,mémoire Ram,processeur (CPU),carte Réseau",//great answers
        choices3: "espace Disque,mémoire Ram,cable Réseau,poste de travail",  
        choices4: "applications,serveur,poste de travail,mémoire Ram",

        answer: 2
    },

    {
        question: "Lequel de ces principes de la virtualisation est incorrect ?",

        choices1: "D'une entité réelle (ER) on obtient plusieurs copies virtuelles (EV) de la même entité", 
        choices2: "D'une entité virtuelles (EV) on obtient une entité réelle (ER) plus importante",//great answers
        choices3: "De plusieurs entités réelle (ER) on obtient une entité virtuelles (EV) plus importante",  
        choices4: "Toutes les reponces sont fausses",

        answer: 2
    },

    {
        question: "Quel sont les elements materiel qui peuvent être virtualisé?",

        choices1: "Machine,Ram,Ports,Carte Réseau",
        choices2: "Cpu,Ecran,Clavier,Mémoire",
        choices3: "Souris,Clavier,Imprimente,Ecran",  
        choices4: "Machine,Mémoire,Disques,Ports",//great answers

        answer: 4
    },

    {
        question: "Aprés la virtualisation quel element est ajouter entre l'OS et le materiels ?",

        choices1: "Un Hyperviseur",//great answers
        choices2: "Une application",
        choices3: "Un OS",  
        choices4: "Un vide",

        answer: 1
    },

    {
        question: "Quel est la difference entre virtualisation et cloud computing ?",

        choices1: "La virtualisation desolidarise les environnements informatique, le cloud computing herberge des données",//great answers
        choices2: "La virtualisation est un systeme optimiser du cloud computing",
        choices3: "La virtualisation et le cloud computing son quasiment identique",  
        choices4: "Tous est vrai",

        answer: 1
    },
    {
        question: "Quel sont les differents niveaux de la virtualisation ?",

        choices1: "Virtualisation de linux / virtualisation d'imprimente",
        choices2: "Virtualisation d'input / virtualisation d'ecran",
        choices3: "Virtualisation d'application / virtualisation d'OS",//great answers
        choices4: "Virtualisation de VDI / virtualisation de Stream",

        answer: 3
    },
    {
        question: "Quel sont les differents types d'Hyperviseur ?",

        choices1: "Hyperviseur N1.02.3 et Hyperviseur v1.2.2",
        choices2: "Hyperviseur type 1 <Bare Metal> et Hyperviseur type 2 <Host Metal>",//great answers
        choices3: "Hyperviseur type 2 <Bare Metal> et Hyperviseur type 1 <Host Metal>",
        choices4: "Hyperviseur type 1 <Bare> et Hyperviseur type 2 <Host>",

        answer: 2
    },
    {
        question: "Quel sont les differents types de virtualisation d'Os ?",

        choices1: "Virtualisation du systeme d'exploitation et des application",
        choices2: "Virtualisation de serveurs et postes de travail",//great answers
        choices3: "Virtualisation de l'interface graphyque et de l'ecran",
        choices4: "Virtualisation du compte utlisateur et des fichiers systèmes",

        answer: 2
    },
    {
        question: "Quel est le principe de la virtualisation de Serveurs ?",

        choices1: "A partir de plusieurs serveur créer des Os de petit serveur",
        choices2: "A partir d'une machine physique crée des serveurs sans Os",
        choices3: "A partir de machine virtuel créer des serveur virtuel",
        choices4: "A partir d'un serveur physique créer plusieurs serveurs virtuel et leurs OS",//great answers

        answer: 4
    },
    {
        question: "Quel est le principe de la virtualisation de poste de travail ?",

        choices1: "A partir de plusieurs machine physique créer de os de post de travail",
        choices2: "A partir d'une machine physique crée des poste de travail sans Os",
        choices3: "A partir d'un postes physique créer plusieurs postes virtuel et leurs OS",//great answers
        choices4: "A partir de postes de travail virtuel créer des postes virtuel",

        answer: 3
    },
    {
        question: "Quel est le principe de la virtualisation de poste de travail ?",

        choices1: "A partir de plusieurs machine physique créer de os de post de travail",
        choices2: "A partir d'une machine physique crée des poste de travail sans Os",
        choices3: "A partir d'un postes physique créer plusieurs postes virtuel et leurs OS",//great answers
        choices4: "A partir de postes de travail virtuel créer des postes virtuel",

        answer: 3
    },
    
]

/*CONSTANTES*/
const SCORE_POINTS = 10;
const MAX_QUESTIONS = 11;

const StartGame=()=>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    GetNewQuestion();
};

const GetNewQuestion=()=>{
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS)
    {
        localStorage.setItem('mostRecentScore', score);  
        return window.location.assign("../Quiz-App/end.html") 
    };
        
    questionCounter++;
    //progressText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
    let questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choices' + number];
    });

    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        let classToApply = selectedAnswer == currentQuestion.answer? "correct" : "incorrect";

        if (classToApply == "correct"){
            IncrementScore(SCORE_POINTS);
        }
        selectedChoice.parentElement.classList.add(classToApply);

       setTimeout(() => {
           selectedChoice.parentElement.classList.remove(classToApply);
           GetNewQuestion();
       }, 1000);

    })
});

IncrementScore=(num)=>{
    score +=num;
    scoreText.innerText = score;
}

StartGame();