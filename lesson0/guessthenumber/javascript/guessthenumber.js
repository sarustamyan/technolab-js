const input = require("readline-sync");

function initSecret(min, max) {
    console.log(`Try to guess a number between ${minValue} and ${maxValue}.`);
    return Math.floor(min + Math.floor(Math.random() * (max - min + 1)));
}

function pickNumber() {
    return input.questionInt("Pick a number... ");
}

const minValue = 1;
const maxValue = 100;
let secret = initSecret(minValue, maxValue);
while (true) {
    let guess = pickNumber();
    if (guess === secret) {
        if (!input.keyInYN("Yay! You guessed it! Try again?")) {
            break;
        }
        secret = initSecret(minValue, maxValue);
    }
    else {
        console.log(`The secret is ${guess < secret ? 'greater' : 'less'} than ${guess}`);
    }
}

