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

// function biggestNumber (firstNumber, secondNumber) {
//     if (firstNumber > secondNumber) {
//         return firstNumber + ' é maior que ' + secondNumber;
//     } else {
//         return secondNumber + ' é maior que ' + firstNumber;
//     }
// }

// console.log(biggestNumber(101,89));

function greaterThanThree(firstNumber, secondNumber, thirdNumber){
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        return firstNumber + ' é o maior número!';
    } else if ( secondNumber > firstNumber && secondNumber > thirdNumber) {
        return secondNumber + ' é o maior número!';
    } else {
        return thirdNumber + ' é o maior número!';
    }
}

console.log(greaterThanThree(1000,667,199));