const action = () => {
    if (clicked == computer) {
        header.innerText = 'DRAW';
    } else if ((clicked - computer) > 0) {
        if ((clicked - computer) % 2 === 1) {
            header.innerText = 'WIN';
        } else {
            header.innerText = 'LOST';
        }
    } else {
        if ((clicked - computer) % 2 === -1) {
            header.innerText = 'LOST';
        } else {
            header.innerText = 'WIN';
        }
    }
    h2.innerText = `You choosed ${options[clicked - 1]}`;
    document.querySelector('#container').insertAdjacentElement('afterend', h2);
    document.querySelectorAll('img').forEach(element => element.classList.add('disabled'));
    setTimeout(() => {
        document.querySelector('#container').prepend(header);
        document.querySelector(`#option${computer}`).classList.add('active');
    }, 2000)
}
const allOptions = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
let options = allOptions.slice(0, +document.querySelector('select').value);
const header = document.createElement('h1');
let clicked = '';
let computer = Math.floor(Math.random() * options.length + 1);
const h2 = document.createElement('h2');
for (let i = 1; i < options.length + 1; i++) {
    const image = document.createElement('img');
    image.src = `img/janken${i}.jpg`;
    image.id = `option${i}`;
    const pars = document.createElement('p');
    pars.innerHTML = `<b>${options[i - 1]}</b>`;
    const divs = document.createElement('div');
    document.querySelector("#imgContainer").append(divs);
    document.querySelector(`#imgContainer div:nth-of-type(${i})`).append(image);
    document.querySelector(`#imgContainer div:nth-of-type(${i})`).append(pars);
    image.addEventListener('click', () => clicked = i);
    image.addEventListener('click', action);
};

window.addEventListener('keydown', (e) => {
    if (0 < e.key && e.key < options.length + 1) {
        clicked = e.key;
        action();
    }
})

// document.querySelector('select').addEventListener('change', (event) => {
//     options = allOptions.slice(0, event.target.value);
//     console.log(event.timeStamp);
//     // document.querySelector('#container').remove();
//     generate(event.timeStamp);
// })
// document.querySelector('button').addEventListener('click', () => {
//     header.remove();
//     h2.remove();
//     document.querySelector(`#option${computer}`).classList.remove('active');
//     clicked = '';
//     computer = Math.floor(Math.random() * options.length + 1);
// })