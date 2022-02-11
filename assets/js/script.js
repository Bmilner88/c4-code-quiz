var welcomeEl = document.querySelector('#welcome');
var highScoresLink = document.querySelector('#high-scores');
var startBtn = document.querySelector('#start-btn');

var quizTimerDisp = document.createElement('h3');
var qstnDisplay = document.createElement('h1');
var options = document.createElement('ol');
var option1 = document.createElement('li');
var option2 = document.createElement('li');
var option3 = document.createElement('li');
var option4 = document.createElement('li');


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
        question: "How long is 2112 by rush?",
        a: '6:59',
        b: '19:15',
        c: '8:12',
        d: '20:34',
        answer: 'd'
    }
];

function quizTimer() {
    var timeLeft = 80;

    var interval = setInterval(function() {
        if(timeLeft > 0) {
            quizTimerDisp.textContent = timeLeft;
            timeLeft--;
        }
        else {
            quizTimerDisp.textContent = "Time's Up!";
            clearInterval(interval);
        };
    }, 1000)
};

function startQuiz() {
    console.log('quiz started!');
    welcomeEl.textContent = '';

}

startBtn.addEventListener('click', startQuiz);