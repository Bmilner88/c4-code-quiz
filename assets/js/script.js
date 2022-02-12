var welcomeEl = document.querySelector('#welcome');
var highScoresLink = document.querySelector('#high-scores');
var startBtn = document.querySelector('#start-btn');
var timerText = document.querySelector('#timer-text')
var i = 0;
var timeLeft = 70;
var score;
var gameEnd = false;

var questionEl = document.createElement('h3');
var options = document.createElement('ul');
var option1 = document.createElement('li');
option1.setAttribute('id', 'a');
var option2 = document.createElement('li');
option2.setAttribute('id', 'b');
var option3 = document.createElement('li');
option3.setAttribute('id', 'c');
var option4 = document.createElement('li');
option4.setAttribute('id', 'd');

const questions = [
    {
        question: "Who was NOT a member of Pink Floyd?",
        a: 'Roger Waters',
        b: 'Jimmy Page',
        c: 'David Gilmour',
        d: 'Richard Wright',
        answer: 'b'
    },
    {
        question: "Who is the singer for Led Zeppelin?",
        a: 'John Paul Jones',
        b: 'John Lennon',
        c: 'Bruce Dickinson',
        d: 'Robert Plant',
        answer: 'd'
    },
    {
        question: "What year did The Beatles break up?",
        a: '1970',
        b: '1980',
        c: '1973',
        d: '1967',
        answer: 'a'
    },
    {
        question: `Which album was Queen's "Bohemian Rhapsody" released on?`,
        a: 'Sheer Heart Attack',
        b: 'Jazz',
        c: 'A Night At The Opera',
        d: 'A Day At The Races',
        answer: 'c'
    },
    {
        question: "How many studio albums did Led Zeppelin release?",
        a: '15',
        b: '4',
        c: '10',
        d: '9',
        answer: 'd'
    },
    {
        question: "How old was Jimi Hendrix when he died?",
        a: '30',
        b: '45',
        c: '27',
        d: '29',
        answer: 'c'
    },
    {
        question: "How long is 2112 by Rush?",
        a: '20:34',
        b: '19:15',
        c: '8:12',
        d: '6:59',
        answer: 'a'
    }
];

function quizTimer() {
    var interval = setInterval(function() {
        if(gameEnd) {
            clearInterval(interval);
        }
        else if (timeLeft > 0){
            timerText.textContent = 'Time Left: ' + timeLeft;
            timeLeft--;
        }
        else {
            timerText.textContent = "Time's Up!";
            clearInterval(interval);
            welcomeEl.textContent = '';
            gameOver();
        };
    }, 1000)
};

function startQuiz() {
    event.preventDefault();

    // clear html welcome screen
    welcomeEl.textContent = '';

    option1.addEventListener('click', checkAnswer)
    option2.addEventListener('click', checkAnswer);
    option3.addEventListener('click', checkAnswer);
    option4.addEventListener('click', checkAnswer);

    askQuestion();
    quizTimer();
}

function askQuestion() {
    if (timeLeft != 0 && i < questions.length) {
        questionEl.textContent = questions[i].question;

        option1.textContent = questions[i].a;
        
        option2.textContent = questions[i].b;
        
        option3.textContent = questions[i].c;
        
        option4.textContent = questions[i].d;
        
        welcomeEl.appendChild(questionEl);
        welcomeEl.appendChild(options);

        options.appendChild(option1);
        options.appendChild(option2);
        options.appendChild(option3);
        options.appendChild(option4);
    }
    else if(i === questions.length) {
        gameOver();
    }
}

function checkAnswer(option){
    if(option.target.id === questions[i].answer) {
        i++
        askQuestion();
    }
    else {
        timeLeft -= 10;
        i++
        askQuestion();
    };
};

function gameOver() {
    // ends the timer
    gameEnd = true;

    // resets the html
    welcomeEl.textContent = '';
    timerText.textContent = '';

    // sets the score
    score = timeLeft;
    if(score < 0) {
        score = 0;
    };
    
    var saveScoreh1 = document.createElement('h1');
    var saveScoreP = document.createElement('p');
    var saveScoreI = document.createElement('input');
    var saveScoreBtn = document.createElement('button');
    var saveScoreDiv = document.createElement('div');
    saveScoreBtn.setAttribute('id', 'save-btn');
        
    saveScoreh1.textContent = 'Save Your Score!';
    saveScoreP.textContent = 'Enter your initials below and click the button to save your score!';
    saveScoreBtn.textContent = 'Save';

    saveScoreDiv.append(saveScoreI, saveScoreBtn);
    welcomeEl.append(saveScoreh1, saveScoreP, saveScoreDiv);
};

function highScores(){};

startBtn.addEventListener('click', startQuiz);
saveScoreBtn.addEventListener('click', highScores);
