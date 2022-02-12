var questionEl = document.createElement('h3');
var scoreList = document.createElement('ul');

var userId = 0;
var users = [];

function loadScore() {
    var savedUsers = localStorage.getItem('users');

    if(!savedUsers) {
        return false;
    };

    console.log('Scores Found');

    savedUsers = JSON.parse(savedUsers);

    for (i = 0; i < savedUsers.length; i++) {
        userId++;
        users.push(savedUsers[i])
    };
};

loadScore();

console.log(users)
console.log(userId)