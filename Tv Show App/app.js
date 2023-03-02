const form = document.querySelector('form');
const searchInput = document.querySelector('#searchInput');
const container = document.querySelector('#showContainer');

const getDataByQuery = async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchInput.value}`);
    const data = await res.json();
    return data;
}

const getImagesByData = async () => {
    const data = await getDataByQuery();
    for (const datum of data) {
        if (datum.show.image) {
            const Img = document.createElement('img');
            Img.src = datum.show.image.medium;
            container.append(Img);
        }
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getImagesByData();
    searchInput.value = '';
})