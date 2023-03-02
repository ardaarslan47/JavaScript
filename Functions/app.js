let rolledDices = [];
function rolldice(i, j) {
    console.log(`you rolled ${i} sided dice`);
    let rolledDice = Math.floor(Math.random() * i + 1);
    if (j) {
        console.log(`with +${j}`);
        console.log(`you rolled ${rolledDice + j}`);
        rolledDices.unshift(rolledDice + j);
        return rolledDice + j;
    } else {
        console.log(`you rolled ${rolledDice}`);
        rolledDices.unshift(rolledDice);
        return rolledDice;
    }
}
function sumArray(array) {
    let sum = 0;
    for (let piece of array){
        sum += piece;
    }
    return sum / array.length;
}
for (let i = 0; i < 2; i++){
    rolldice(20);
}
console.log(sumArray(rolledDices)); 

function makeBetweenFunc (min, max){
    return function (num) {
        return num <= max && num > min ;
    }
}

function sayName() {
    return this.name + " " + this.surname;
}
const person1 = {
    name: "Arda",
    surname: "Arslan",
    age: 22,
    sayName,
}
const person2 = {
    name: "Azize",
    surname: "Pilic",
    age: 21,
    sayName,
}
const person3 = {
    name: "Ozan",
    surname: "Yasin",
    age: 25,
    sayName,
}


const movies = [
    {
        title: 'Amadeus',
        score: 95,
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90,
    }
]

const worstMovie = movies.reduce((worst, curr) => {
    if (curr.score < worst.score){
        return curr;
    }
    return worst;
})

// for (let movie of movies) {
//     console.log(`${movie.title} - ${movie.score}/100`);
// }

// movies.forEach(function(movie) {
//     console.log(`${movie.title} - ${movie.score}/100`);
// })


const nums = [];
let index = 50;
setInterval(() => nums.push(index++),200)
// const squares = nums.map(function(num){
//     return 2 ** num;
// }
function square(array) {
    return array.map(element => 2 ** element)
}

const isEven = (num) => num % 2 === 0;
const evenArray = (array) => array.filter(element => element % 2 === 0);
const isEvenArray = (array) => array.map(element => element % 2 === 0);
const maxNum = (array) => Math.max(...array);
const minNum = (array) => array.reduce((min, curr) => {
    if (curr < min){
        return curr;
    }
    return min;
})
const minNumPlus = (array = nums) => Math.min(...array);