// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// usado no exercício 2 e 4 
// let result = 0;

// Exercício 1
// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }


// Exercício 2
// for (let index = 0; index < numbers.length; index += 1) {
//     result += numbers[index];
// }

// console.log(result);

// Exercício 3
// let sum = 0;

// for (let index = 0; index < numbers.length; index +=1) {
//     sum += numbers[index];
// }

// let average = sum / numbers.length;

// console.log(average);

// Exercício 4
// for (let index = 0; index < numbers.length; index += 1) {
//     result += numbers[index];
// }

// result = result / numbers.length;

// if (result > 20) {
//     console.log('Valor maior que 20');
// } else {
//     console.log('Valor menor ou igual a 20');
// }

// Exercício 5 FOGUETE
// let higherNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] > higherNumber) {
//         higherNumber = numbers[index];
//     }
// }

// console.log(higherNumber);

// Exercício 6
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         result += 1;
//     }
// }

// if (result === 0) {
//     console.log('nenhum número ímpar encontrado!');
// } else {
//     console.log(result);
// }

// Exercício 7
// let smallestNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] < smallestNumber) {
//         smallestNumber = numbers[index];
//     }
// }

// console.log(smallestNumber);

// Exercício 8
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
    numbers.push(index);
}

console.log(numbers);

// Exercício 9
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
}