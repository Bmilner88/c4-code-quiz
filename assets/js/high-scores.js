var welcomeEl = document.querySelector('#welcome');
var questionEl = document.createElement('h3');
var scoreList = document.createElement('ul');

var userId = 0;
var users = [];

function createLi(initials, score) {
    var temp = document.createElement('li');
    temp.textContent = initials + ' ' + score;
    return temp;
}

function loadScore() {
    var savedUsers = localStorage.getItem('users');

    welcomeEl.appendChild(scoreList);

    if(!savedUsers) {
        return false;
    };

    console.log('Scores Found');

    savedUsers = JSON.parse(savedUsers);

    for (i = 0; i < savedUsers.length; i++) {
        userId++;
        users.push(savedUsers[i])
        scoreList.append(createLi(users[i].initials, users[i].score));
        users.score.sort((a, b) => a - b);
    };
};

loadScore();

console.log(users)
console.log(userId)