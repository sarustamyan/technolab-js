let board = [[".", ".", "9", "7", "4", "8", ".", ".", "."], ["7", ".", ".", ".", ".", ".", ".", ".", "."], [".", "2", ".", "1", ".", "9", ".", ".", "."], [".", ".", "7", ".", ".", ".", "2", "4", "."], [".", "6", "4", ".", "1", ".", "5", "9", "."], [".", "9", "8", ".", ".", ".", "3", ".", "."], [".", ".", ".", "8", ".", "3", ".", "2", "."], [".", ".", ".", ".", ".", ".", ".", ".", "6"], [".", ".", ".", "2", "7", "5", "9", ".", "."]];
let sudoku = initSudoku(board);

let solvedSudoku = solve(sudoku);

console.log(convertToMatrix(solvedSudoku));

function initSudoku(board) {
    var sudoku = [];
    for (let i = 0; i < 9; i++) {
        sudoku[i] = [];
        for (let j = 0; j < 9; j++) {

            if (board[i][j] === ".") {
                sudoku[i][j] = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
            }
            else {
                sudoku[i][j] = new Set(board[i][j]);
            }
        }
    }
    return sudoku;
}

function solve(sudoku) {
    try {
        while (seive(sudoku) > 0) {
        }
    }
    catch (e) {
        return undefined;
    }

    if (isSolved(sudoku)) {
        return sudoku;
    }

    let item = getItemWithMinimumChoices(sudoku);
    let choices = [...sudoku[item.row][item.column]]
    for (let i = 0; i < choices.length; i++) {
        let copy = convertToMatrix(sudoku);
        copy[item.row][item.column] = '' + choices[i];
        let solvedCopy = solve(initSudoku(copy))
        if (typeof solvedCopy !== "undefined") {
            return solvedCopy;
        }
    }
}

function isSolved(sudoku) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j].size > 1) {
                return false;
            }
        }
    }
    return true;
}

function convertToMatrix(sudoku) {
    let matrix = []
    for (let i = 0; i < 9; i++) {
        matrix[i] = [];
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j].size === 1) {
                matrix[i][j] = '' + [...sudoku[i][j]][0];
            }
            else {
                matrix[i][j] = '.';
            }
        }
    }
    return matrix;
}

function getItemWithMinimumChoices(sudoku) {
    var minChoiceItem = {
        row: 0,
        column: 0,
        numberOfChoices: 10
    };
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            var numberOfChoices = sudoku[i][j].size;
            if (numberOfChoices > 1 && numberOfChoices < minChoiceItem.numberOfChoices) {
                minChoiceItem = {
                    row: i,
                    column: j,
                    numberOfChoices: numberOfChoices
                };
            }
        }
    }
    return minChoiceItem;
}

function seive(sudoku) {
    let numberOfSeivedItems = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j].size === 1) {
                continue;
            }
            seiveItem(sudoku, i, j);
            if (sudoku[i][j].size === 0) {
                throw new Error('Invalid sudoku');
            }
            if (sudoku[i][j].size === 1) {
                numberOfSeivedItems++;
            }
        }
    }
    return numberOfSeivedItems;
}

function seiveItem(sudoku, row, column) {
    if (sudoku[row][column].size === 1) {
        return;
    }
    for (let k = 0; k < 9; k++) {
        if (k === column) {
            continue;
        }
        if (sudoku[row][k].size > 1) {
            continue;
        }
        sudoku[row][column].delete([...sudoku[row][k]][0]);
    }
    for (let k = 0; k < 9; k++) {
        if (k === row) {
            continue;
        }
        if (sudoku[k][column].size > 1) {
            continue;
        }
        sudoku[row][column].delete([...sudoku[k][column]][0]);
    }
    var squareStartRow = Math.floor(row / 3) * 3;
    var squareStartColumn = Math.floor(column / 3) * 3;
    for (let i = squareStartRow; i < squareStartRow + 3; i++) {
        for (let j = squareStartColumn; j < squareStartColumn + 3; j++) {
            if (i === row && j === column) {
                continue;
            }
            if (sudoku[i][j].size > 1) {
                continue;
            }
            sudoku[row][column].delete([...sudoku[i][j]][0]);
        }
    }
}