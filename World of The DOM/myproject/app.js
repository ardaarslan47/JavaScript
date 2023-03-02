const allImages = document.getElementsByTagName('img');
for (let img of allImages) {
    console.log(img.src);
}
const allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}
const allParagraphs = document.querySelectorAll('p');
for (let par of allParagraphs) {
    par.style.textIndent = '3ch';
}
const allUls = document.querySelectorAll('ul');
for (let ul of allUls) {
    ul.style.listStyle = 'none';
}
const table = document.querySelector('table');
document.querySelector('#closeButton').addEventListener('click', () => table.classList.toggle('closed'));
