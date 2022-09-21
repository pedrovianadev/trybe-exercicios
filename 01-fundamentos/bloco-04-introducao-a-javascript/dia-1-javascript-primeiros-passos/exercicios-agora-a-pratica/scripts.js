let a = 44;
let b = 240;
let c = 13;

console.log("Soma: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + (a * b));
console.log("Divisão: " + (a / b));
console.log("Módulo: " + (a % b));

if (a > b) {
    console.log("'a' é maior que 'b'");
} else {
    console.log("'b' é maior que 'a'");
};

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

let grade = 90;

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