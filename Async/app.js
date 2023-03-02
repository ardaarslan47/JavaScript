const fakeRequestFunc = (url) => {
    let random = Math.random() * 10
    return new Promise((resolve, reject) => {
        if (random < 5) {
            resolve(`Data from ${url}`);
        } else {
            reject('Error!!');
        }
    })
};

fakeRequestFunc('arda/1')
    .then((data) => {
        console.log(data)
        return fakeRequestFunc('arda/2')
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    });

// async function fakeRequest(){
//     let data1 = await fakeRequestFunc('arda/1')
//     console.log(data1)
//     let data2 = await fakeRequestFunc('arda/2')
//     console.log(data2)
// }

async function fakeRequest(num){
    try {
        for (let i = 0; i < num; i++) {
            let data = await fakeRequestFunc(`arda/${i + 1}`)
            console.log(data)
        }
    } catch (error) {
            console.log(error)
    }
}





const backgroundChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
};

backgroundChange('red', 0)
    .then(() => backgroundChange('blue', 1000))
    .then(() => backgroundChange('magenta', 1000))
    .then(() => backgroundChange('purple', 1000))