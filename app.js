// const people = ["Arda", "Azize", "Ali", "Ozan"];
// people.splice(2, 2, "Ahmet", "Umut");
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
//     for (let j = people.length - 1; j >= 0; j--) {
//         console.log(people[i] + ` is number ${j + 1}`);
//     }
// }


// const janken = ["Rock", "Paper", "Scissors"];
// let computer = Math.floor(Math.random() * 3);
// let user = prompt("Choose one: Rock, Paper, Scissors", "Rock");
// console.log(janken[computer]);
// if (janken.indexOf(user) === computer) {
//     console.log("DRAW");
// } else if (janken.indexOf(user) - computer === 1 || janken.indexOf(user) - computer === (-2)) {
    //     console.log("WIN");
// } else {
//     console.log("LOST");
// }

// const secretCode = "Arda";
// let guess = prompt("Enter the secret code!");
// while (guess !== secretCode) {
//     guess = prompt("Enter the secret code!");
// }

// let maxNumber = Number(prompt("Welcome! Enter your max number:"));
// while (!maxNumber) {
//     maxNumber = Number(prompt("Enter a number!"));
// }
// let attempts = 1;
// const theNumber = (Math.floor(Math.random() * maxNumber)) + 1;
// let guess = prompt("Enter your first guess.");
// while (parseInt(guess) !== theNumber) {
    //     if (guess === "q") break;
//     attempts++
//     if (guess < theNumber) {
    //         guess = prompt("Too low! Enter a new guess.");
    //     } else {
        //         guess = prompt("Too high! Enter a new guess.");
//     }
// }
// if (guess === "q") {
    //     console.log("Okay! You quit.")
// } else {
//     console.log(`Congrats! It took you ${attempts} guesses`);
// }

// const people = [
//     ["Arda", "Azize"],
//     ["Ahmet", "Umut"],
//     ["Ozan", "Ali", "Ömer"],
//     ["Kayacan", "İlyas", "İbrahim"]
// ]
// for (let i = 0; i < people.length; i++) {
//     const row = people[i];
//     console.log(`${i + 1}. Sıra`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

const names = ["Ayşe", "Fatma", "Hayriye"];
for (let name of names) {
    console.log(name);
}

const people = [
    ["Arda", "Azize"],
    ["Ahmet", "Umut"],
    ["Ozan", "Ali", "Ömer"],
    ["Kayacan", "İlyas", "İbrahim"]
]
for (let row of people) {
    for (person of row) {
        console.log(person);
    }
}