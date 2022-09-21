// Exercício 1
let a = 44;
let b = 240;
let c = 13;

console.log("Soma: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + (a * b));
console.log("Divisão: " + (a / b));
console.log("Módulo: " + (a % b));

// Exercício 2
if (a > b) {
    console.log("'a' é maior que 'b'");
} else {
    console.log("'b' é maior que 'a'");
};

// Exercício 3
if (a > b && a > c) {
    console.log('O maior número é: ' + a + ' (a)');
    } else if (b > a && b > c) {
    console.log('O maior número é: ' + b + ' (b)');
    } else {
    console.log('O maior número é: ' + c + ' (c)');
    };
    // aqui eu estava errando pq estava colocando uma condição no else o que não é necesário

// Exercício 4
const number = 16;

if (number > 0) {
    console.log("positive")
} else if (number < 0) {
    console.log("negative")
} else {
    console.log("zero");
};

// Exercício 5
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

// Exercício 6
const chessPiece = 'peão';

switch (chessPiece.toLowerCase()) {
    case 'rei':
        console.log('Rei: Apenas uma cara em qualquer direção.');
        break
    case 'rainha':
        console.log('Rainha: Quantas casas quiser na diagonal, horizontal e vertical.');
        break
    case 'bispo':
        console.log('Bispo: Quantas casas quiser na diagonal.');
        break
    case 'cavalo':
        console.log('Cavalo: Se movimenta em "L" e pula sobre peças.');
        break
    case 'torre':
        console.log('Torre: Quantas casas quiser na horizontal e vertical.');
        break
    case 'peão':
        console.log('Peão: Se move apenas uma casa para frente e apenas no seu primeiro movimento pode escolher entre se mover uma ou duas casas.');
        break
    default:
        console.log('Erro, peça inválida');
        break;
};

// Exercício 7
let grade = 13;

if (grade < 0 || grade > 100) {
    console.log("Nota incorreta! Por favor preencha com um número de 0 a 100!");
} else if (grade >= 90) {
    console.log('A');
} else if (grade >= 80) {
    console.log('B');
} else if (grade >= 70) {
    console.log('c');
} else if (grade >= 60) {
    console.log('D');
} else if (grade >= 50) {
    console.log('E');
} else {
    console.log('F');
};

// Exercício 8

let num1 = 15;
let num2 = 27;
let num3 = 99;

let isEven = false;

if((num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0)) {
    isEven = true;
};

console.log(isEven);

// nesse tive um pequeno problema pq tinha acabado usando uma let que eu já havia criado kkkk

// Exercício 9

let numA = 20;
let numB = 10;
let numC = 40;

let isOdd = false;

if((numA % 2 !== 0 || numB % 2 !== 0 || numC % 2 !== 0)){
    isOdd = true;
};
console.log(isOdd);
// basicamente fazer a mesma coisa do exercício 8!

// Exercício 10

let costOfProduct = 100;
let saleValue = 500;

if (costOfProduct >= 0 && saleValue >= 0) {
    let totalCostOfProduct = costOfProduct * 1.2;
    let totalProfit = (saleValue - totalCostOfProduct) * 1000;
    console.log(totalProfit);
} else {
    console.log('Erro, não podem ter valores negativos!');
};