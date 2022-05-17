const input = require("readline-sync");

function Game(options) {
    this.options = options;
    const that = this;
    const regex = new RegExp(`^\\d{${this.options.numberOfDigits}}$`);

    this.start = function () {
        this.secret = [2, 6, 9, 8];
    }

    this.check = function (value) {
        let digits = parse(value);
        let correctNumbers = digits.filter(x => this.secret.includes(x)).length;
        let correctPlaces = digits.filter((x, index) => this.secret[index] === x).length;

        return { numbers: correctNumbers, places: correctPlaces };
    }

    function parse(value) {
        let digits = [];
        const errorMessage = `Invalid input. The secret consists of ${that.options.numberOfDigits} unique digits`;
        if (typeof value === 'number') {
            value = value.toString();
        }

        if (typeof value === 'string') {
            if (!regex.test(value)) {
                throw new Error(errorMessage);
            }
            digits = Array.from(value).map(x => Number(x));
        }
        else if (Array.isArray(value)) {
            digits = value;
        }
        else {
            throw new Error(errorMessage);
        }

        if (new Set(digits).size < that.options.numberOfDigits) {
            throw new Error(errorMessage);
        }

        return digits;
    }
}

var search = function (nums, target) {
    let min = 0;
    let max = nums.length - 1;

    return searchHelper(nums, target, min, max);
};

var searchHelper = function (nums, target, min, max) {
    if (min > max) {
        return -1;
    }

    let mid = min + Math.floor((max - min) / 2);
    if (nums[mid] === target) {
        return mid;
    }
    if (nums[mid] < target) {
        let upperHalf = searchHelper(nums, target, mid + 1, max);
        if (upperHalf > -1) {
            return upperHalf;
        }
        return searchHelper(nums, target, min, mid - 1);
    }
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))


// let game = new Game({ numberOfDigits: 4 });
// game.start();
// while (true) {
//     let guess = input.question("Take a guess... ");
//     let result = game.check(guess);

//     if (result.places === game.options.numberOfDigits) {
//         if (!input.keyInYN("Yay! You guessed it! Try again?")) {
//             break;
//         }
//         game.start();
//     }
//     else {
//         console.log(`Digits matched: ${result.numbers}, in the right place: ${result.places}.`);
//     }
// }