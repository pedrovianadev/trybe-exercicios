let a = 44;
let b = 240;
let c = 13;

console.log("Soma: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + (a * b));
console.log("Divisão: " + (a / b));
console.log("Módulo: " + (a % b));

// if (a > b) {
//     console.log("'a' é maior que 'b'");
// } else {
//     console.log("'b' é maior que 'a'");
// };

if (a > b && a > c) {
    console.log('O maior número é: ' + a + ' (a)');
    } else if (b > a && b > c) {
    console.log('O maior número é: ' + b + ' (b)');
    } else {
    console.log('O maior número é: ' + c + ' (c)');
    };
    // aqui eu estava errando pq estava colocando uma condição no else o que não é necesário

const number = 16;

if (number > 0) {
    console.log("positive")
} else if (number < 0) {
    console.log("negative")
} else {
    console.log("zero");
};

let degreeAngleA = 50;
let degreeAngleB = 100;
let degreeAngleC = 30;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if (allAnglesArePositives) {
    if (sumOfAngles === 180){
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('Erro: ângulo inválido!');
};