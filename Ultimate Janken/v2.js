const firstLetterCap = (str) => (str[0].toUpperCase() + str.slice(1));

const allOptions = ['rock', 'paper', 'scissors', 'spock', 'lizard', 'wizard', 'glock'];
const container = document.querySelector('#container');
const level = document.querySelector('#level');
const form = document.querySelector('form');
const questionMark = document.querySelector('#questionMark');
const infoContent = document.querySelector('#info');
const infoLevel = document.querySelector('#info p');
const infoImage = document.querySelector('#info img')
const header = document.createElement('h1');
const resultHeader = document.createElement('h2');
let userScore = 0;
let computerScore = 0;
let computer = Number;

function action(num) {
    function result() {
        document.querySelectorAll('img').forEach(element => element.classList.add('disabled'));
        form.classList.add('disabled');

        computer = Math.floor(Math.random() * options.length + 1);
        resultHeader.innerText = `You choosed ${firstLetterCap(options[clicked - 1])}`;

        // const draw = clicked === computer;
        // const win = clicked > computer ? (clicked - computer) % 2 === 1 : (clicked - computer) % 2 === -1;
        // const lost = clicked > computer ? (clicked - computer) % 2 === 0 : (clicked - computer) % 2 === 1;

        // if (draw) {
        //     header.innerText = "DRAW";
        // } else if (win) {
        //     header.innerText = "WIN";
        //     userScore++;
        // } else if (lost) {
        //     header.innerText = "LOST";
        //     computerScore++;
        // }

        if (clicked == computer) {
            header.innerText = 'DRAW';
        } else if ((clicked - computer) > 0) {
            if ((clicked - computer) % 2 === 1) {
                header.innerText = 'WIN';
                userScore++;
            } else {
                header.innerText = 'LOST';
                computerScore++;
            }
        } else {
            if ((clicked - computer) % 2 === -1) {
                header.innerText = 'LOST';
                computerScore++;
            } else {
                header.innerText = 'WIN';
                userScore++;
            }
        }


        container.insertAdjacentElement('afterend', resultHeader);

        setTimeout(() => {
            document.querySelector('#score').innerHTML = `${userScore} - ${computerScore}`;
            document.body.prepend(header);
            document.querySelector(`#container div:nth-of-type(${computer}) img`).classList.add('active');
            form.classList.remove('disabled');
        }, 2000)
    }

    function reset() {
        header.remove();
        resultHeader.remove();
        container.querySelectorAll('div').forEach(div => div.remove());
        action(level.value);
    }

    infoLevel.innerText = `Level ${Math.floor(num / 2)}`;
    infoImage.src = `img/level${num}.jpeg`;

    let options = allOptions.slice(0, num);

    for (let i = 1; i <= num; i++) {
        const imgContainer = document.createElement('div');
        container.append(imgContainer);

        const image = document.createElement('img');
        image.src = `img/janken${i}.jpg`;

        const titles = document.createElement('p');
        titles.innerHTML = `<b>${firstLetterCap(options[i - 1])}</b>`;

        imgContainer.append(image, titles)

        image.addEventListener('click', () => clicked = i);
        image.addEventListener('click', result);
    }

    level.addEventListener('change', reset)

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        reset();
    })
} action(level.value);

questionMark.addEventListener('mouseenter', () => infoContent.classList.toggle('infoDisable'));
questionMark.addEventListener('mouseleave', () => infoContent.classList.toggle('infoDisable'));
questionMark.addEventListener('mouseenter', () => document.body.classList.add('background'));
questionMark.addEventListener('mouseleave', () => document.body.classList.remove('background'));