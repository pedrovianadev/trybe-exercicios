const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} + ' ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = "Não devo ser utilizada fora do meu escopo (else)";
    console.log(elseScope);
  }
};

testingScope(true);

//   Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
  for (let index = 1; index < array.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
      if (array[index] < array[index2]) {
        let position = array[index];
        array[index] = array[index2];
        array[index2] = position;
      }
    }
  }
  return array;
};
// Seu código aqui.

console.log(sortOddsAndEvens([1, 5, 16, 2, 13, 2, 45, 3])); // será necessário alterar essa linha 😉

// Parte 2

// const factorial = (number) => {
//     let result = 1

//     for (let index = 1; index <= number.length; index += 1) {
//         result *= index;
//     }
//     return result;
// };
// let result = factorial(number);
// console.log(`Esse é o fatorial ${result}`)

// tentando o bonus do exercicio 1 parte 2

const factorial = (number) => {
  if (number > 1) {
    return number * factorial(number - 1);
  } else {
    return 1;
  }
};

console.log(factorial(13));

// em uma única linha

const factorial = (number) => (number > 1 ? number * factorial(number - 1) : 1);

console.log(factorial(13));
