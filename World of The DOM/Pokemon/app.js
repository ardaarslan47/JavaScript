// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const div = document.querySelector('#container');
for (let i = 0; i < 75; i++) {
    const childDiv = document.createElement('div');
    const span = document.createElement('span');
    span.innerHTML = `<b>#${i + 1}</b>`
    const image = document.createElement('img');
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`;
    image.classList.add('square');
    div.append(childDiv);
    childDiv.append(image, span);
}