const score = document.querySelector('#score');
const endScore = document.querySelector('select');
const playerOneButton = document.querySelector('#playerOnePlus');
const playerTwoButton = document.querySelector('#playerTwoPlus');
const resetButton = document.querySelector('#reset');
let playerOneScore = 0;
let playerTwoScore = 0;

for (let i = 5; i < 22; i += 2) {
    const newOption = document.createElement('option');
    newOption.value = `${i}`;
    newOption.innerText = `${i}`;
    endScore.append(newOption);
}

const playerOneWin = () => {
    score.innerHTML = `<span style="color: green">${playerOneScore}</span> to <span style="color: red">${playerTwoScore}</span>`
    playerOneButton.classList.add('disabled');
    playerTwoButton.classList.add('disabled');
}

const playerTwoWin = () => {
    score.innerHTML = `<span style="color: red">${playerOneScore}</span> to <span style="color: green">${playerTwoScore}</span>`
    playerOneButton.classList.add('disabled');
    playerTwoButton.classList.add('disabled');
}

playerOneButton.addEventListener('click', () => {
    playerOneScore++;
    playerOneScore == endScore.value ? playerOneWin() : score.innerHTML = `${playerOneScore} to ${playerTwoScore}`;
});

playerTwoButton.addEventListener('click', () => {
    playerTwoScore++;
    playerTwoScore == endScore.value ? playerTwoWin() : score.innerHTML = `${playerOneScore} to ${playerTwoScore}`;
})

resetButton.addEventListener('click', () => {
    playerOneScore = 0;
    playerTwoScore = 0;
    score.innerHTML = `${playerOneScore} to ${playerTwoScore}`;
    playerOneButton.classList.remove('disabled');
    playerTwoButton.classList.remove('disabled');
})