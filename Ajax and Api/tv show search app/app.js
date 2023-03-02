const form = document.querySelector('#form');
const searchInput = document.querySelector('#searchInput');
const showList = document.querySelector('#showList');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    showList.innerHTML = "";
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchInput.value}`);
    const data = await res.json();
    for (const datum of data) {
        if (datum.show.image) {
            const newLi = document.createElement('li')
            // newLi.innerText = datum.show.image.medium;
            newLi.innerHTML = `<img src="${datum.show.image.medium}" alt="${datum.show.name}"> <p class="title">${datum.show.name}</p>`
            showList.append(newLi);
            newLi.addEventListener('click', () => {
                window.open(`${datum.show.officialSite}`);
            })
        }
    }
    searchInput.value = '';
})