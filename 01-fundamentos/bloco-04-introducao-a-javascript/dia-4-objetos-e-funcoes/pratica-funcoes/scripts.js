// function soma (a, b) {
//     return a + b;
// }

// function sub (a, b) {
//     return a - b;
// }

// function mult (a, b) {
//     return a * b;
// }

// function div (a, b) {
//     return a / b;
// }

// function mod (a, b) {
//     return a % b;
// }

// console.log(mod(5, 29));

function biggestNumber (firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber + ' é maior que ' + secondNumber;
    } else {
        return secondNumber + ' é maior que ' + firstNumber;
    }
}

console.log(biggestNumber(101,89));