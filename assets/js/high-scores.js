var welcomeEl = document.querySelector('#welcome');
var questionEl = document.createElement('h3');
var scoreList = document.createElement('ul');

var userId = 0;
const users = [];

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

    savedUsers = JSON.parse(savedUsers);

    for (i = 0; i < savedUsers.length; i++) {
        userId++;
        users.push(savedUsers[i])
    };

    users.sort((a, b) => b.score - a.score);

    for (i = 0; i < users.length; i++) {
        scoreList.append(createLi(users[i].initials, users[i].score));
    };
};

loadScore();