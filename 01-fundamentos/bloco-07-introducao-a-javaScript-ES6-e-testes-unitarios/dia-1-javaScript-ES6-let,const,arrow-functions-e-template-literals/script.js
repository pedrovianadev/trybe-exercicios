const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} + ' ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
  }

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

console.log(sortOddsAndEvens(array)); // será necessário alterar essa linha 😉
