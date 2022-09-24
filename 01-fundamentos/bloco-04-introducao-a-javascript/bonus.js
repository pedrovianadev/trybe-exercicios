// Exercício bonus 1
// let n = 15;

// let symbol = '*'

// let inputLine = '';

// for (let index = 0; index < n; index += 1){
//     inputLine = inputLine + symbol;
// }

// for (let index = 0; index < n; index += 1){
//     console.log(inputLine);
// }

// Exercício bonus 2
// let size = 3;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex <= size; lineIndex +=1) {
//     console.log(inputLine);
//     inputLine = inputLine + symbol;
// }

// Exercício bonus 3
let size = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = size - 1;

for (let lineIndex = 0; lineIndex < size; lineIndex += 1){
    for(let columnIndex = 0; columnIndex < size; columnIndex += 1){
        if (columnIndex < inputPosition){
            inputLine = inputLine + ' ';
        } else {
            inputLine = inputLine +symbol;
        }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
}