const form = document.querySelector('form');
const list = document.querySelector('ul');
const userNameInput = document.querySelector('input[placeholder = "username"]')
const tweetInput = document.querySelector('input[placeholder = "tweet"]')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerHTML = `<b>${userNameInput.value}</b> - ${tweetInput.value}`;
    list.append(newLi);
    newLi.style.cursor = 'pointer';
    userNameInput.value = '';
    tweetInput.value = '';
})

list.addEventListener('click', (e) => {
    e.target.nodeName === 'LI' ? e.target.remove() : null;
})