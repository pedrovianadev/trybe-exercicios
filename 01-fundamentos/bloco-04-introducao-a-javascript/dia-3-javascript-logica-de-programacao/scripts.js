let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}

console.log(fatorial);
// Aqui eu tive que começar meu fatorial no número 1 para que não desse zero e aqui eu faço o processo inverso do que estava fazendo no começo colocando -= ao invés de += pois eu quero ir diminuindo para todos os meus index que não sejam 0, afinal o 0 irá tornar todos meus resultados 0!

let word = 'Pedro';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
    reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);
// Essa aqui eu gostaria de entender melhor como funciona a estrutura do for aqui

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

console.log(biggestWord);

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smallestWord.length) {
        smallestWord = array[index];
    }
}

console.log(smallestWord);

// Essa daqui o raciocínio foi tranquilo só esqueci de usar o console.log para imprimir a resposta no teste

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber +=1) {
    let isPrime = true;
    for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1){
        if (currentNumber % currentDivisor === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        biggestPrimeNumber = currentNumber;
    }
}

console.log(biggestPrimeNumber);

// Essa aqui é muito grande, mas acredito ter entendido o raciocínio, só quero conseguir trabalhar um pouco minha lógica para poder entender melhor o que foi feito hoje