var welcomeEl = document.querySelector('#welcome');
var highScoresLink = document.querySelector('#high-scores');
var startBtn = document.querySelector('#start-btn');
var timerText = document.querySelector('#timer-text')
var i = -1;
var timeLeft = 60;

var questionEl = document.createElement('h3');
var options = document.createElement('ul');
var option1 = document.createElement('li');
var option2 = document.createElement('li');
var option3 = document.createElement('li');
var option4 = document.createElement('li');
option1.setAttribute('id', 'a');
option2.setAttribute('id', 'b');
option3.setAttribute('id', 'c');
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
        a: '6:59',
        b: '19:15',
        c: '8:12',
        d: '20:34',
        answer: 'd'
    }
];

function quizTimer() {
    var interval = setInterval(function() {
        if(timeLeft > 0) {
            timerText.textContent = 'Time Left: ' + timeLeft;
            timeLeft--;
        }
        else {
            timerText.textContent = "Time's Up!";
            clearInterval(interval);
        };
    }, 1000)
};

function startQuiz() {
    console.log('quiz started!');
    // clear html welcome screen
    welcomeEl.textContent = '';

    welcomeEl.appendChild(questionEl);
    welcomeEl.appendChild(options);

    options.appendChild(option1);
    options.appendChild(option2);
    options.appendChild(option3);
    options.appendChild(option4);

    askQuestion();
    quizTimer();
}

function askQuestion() {
    i++;
    console.log(questions.length)
    if (i < questions.length) {
        questionEl.textContent = questions[i].question;

        option1.textContent = questions[i].a;
        option1.addEventListener('click', function(option1){
            if(option1.target.id === questions[i].answer) {
                console.log('correct!');
                askQuestion();
            }
            else {
                console.log('incorrect!');
                timeLeft -= 10;
                askQuestion();
            }
        });

        option2.textContent = questions[i].b;
        option2.addEventListener('click', function(option2){
            if(option2.target.id === questions[i].answer) {
                console.log('correct!');
                askQuestion();
            }
            else {
                console.log('incorrect!');
                timeLeft -= 10;
                askQuestion();
            }
        });

        option3.textContent = questions[i].c;
        option3.addEventListener('click', function(option3){
            if(option3.target.id === questions[i].answer) {
                console.log('correct!');
                askQuestion();
            }
            else {
                console.log('incorrect!');
                timeLeft -= 10;
                askQuestion();
            }
                
        });

        option4.textContent = questions[i].d;
        option4.addEventListener('click', function(option4){
            if(option4.target.id.toString() === questions[i].answer) {
                console.log('correct!');
                askQuestion();
            }
            else {
                console.log('incorrect!');
                timeLeft -= 10;
                askQuestion();
            }
        });
        console.log(i)
    } 
    else if (timeLeft === 0) {
        welcomeEl.textContent = '';
        console.log('game over')
        console.log(i)
    }
    else {
        welcomeEl.textContent = '';
        console.log('game over')
        console.log(i)
    }
}

startBtn.addEventListener('click', startQuiz);