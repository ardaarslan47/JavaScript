// const getStarWarsChar = async (id) => {
//     try {
//         const res = await fetch(`https://swapi.dev/api/people/${id}/`);
//         const data = await res.json();
//         console.log(data.name);
//     } catch (error) {
//         console.log(error);
//     }
// }; 
// getStarWarsChar(2).then(() => {
//     getStarWarsChar(5);
// })

// console.log("arda");

const randomDadJoke = async () => {
    try {
        const res = await fetch("https://icanhazdadjoke.com/", {
            method: "get",
            headers: {
                Accept: "application/json"
            }
        });
        const data = await res.json();
        return data.joke;
    } catch (error) {
        return "error!";
    }
};

document.querySelector('button').addEventListener('click', async () => {
    let joke = await randomDadJoke();
    const newPar = document.createElement('p');
    newPar.innerText = joke;
    document.body.append(newPar);
})