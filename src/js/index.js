// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const getRandomNumber = numbers => {
  const random = Math.floor(Math.random() * numbers.length);

  console.log(random);
};
getRandomNumber([1, 2, 3, 4, 5]);

const getOperations = numbers => {
  const suma = numbers[0] + numbers[1] + numbers[2];
  console.log(suma);

  const media = (numbers[0] + numbers[1] + numbers[2]) / 3;
  console.log(media);
};

getOperations([1, 2, 3]);

const aleatoryNumbers = numbers => {
  const aleatory = Math.floor(Math.random() * 11);
  const numberContent = numbers.includes(aleatory);

  if (numbers.includes(aleatory)) {
    console.log(`El número ${aleatory} está en ${numbers.indexOf(aleatory)}.`);
  } else {
    console.log(`El número ${aleatory} no está.`);
  }
};

aleatoryNumbers([2, 5, 8, 3, 6]);

const randomNumbers = numbers => {
  const threeAleatory = Math.floor(Math.random() * 101);

  const threeAleatoryB = Math.floor(Math.random() * 101);

  const threeAleatoryC = Math.floor(Math.random() * 101);

  numbers.push(threeAleatory, threeAleatoryB, threeAleatoryC);

  console.log(numbers);
};
randomNumbers([]);

const newNumbers = numbers => {
  const even = [];
  const odd = [];

  const aleatoryNew = Math.floor(Math.random() * 11);

  if ((numbers[0] * aleatoryNew) % 2 === 0) {
    even.push(numbers[0] * aleatoryNew);
  } else {
    odd.push(numbers[0] * aleatoryNew);
  }
  if ((numbers[1] * aleatoryNew) % 2 === 0) {
    even.push(numbers[1] * aleatoryNew);
  } else {
    odd.push(numbers[1] * aleatoryNew);
  }
  if ((numbers[2] * aleatoryNew) % 2 === 0) {
    even.push(numbers[2] * aleatoryNew);
  } else {
    odd.push(numbers[2] * aleatoryNew);
  }
  if ((numbers[3] * aleatoryNew) % 2 === 0) {
    even.push(numbers[3] * aleatoryNew);
  } else {
    odd.push(numbers[3] * aleatoryNew);
  }
  if ((numbers[4] * aleatoryNew) % 2 === 0) {
    even.push(numbers[4] * aleatoryNew);
  } else {
    odd.push(numbers[4] * aleatoryNew);
  }
  console.log(`${even} son pares`);
  console.log(`${odd} son impares`);
};
newNumbers([1, 23, 32, 4, 5]);

const dniLetter = dniNumber => {
  const letters = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E',
  ];
  const position = dniNumber % 23;

  console.log(`${dniNumber} ${letters[position]}`);
};

dniLetter(5967183);

const threeWords = words => {
  const upperLetters = [];
  const wordA = words[0];
  const wordB = words[1];
  const wordC = words[2];
  const firstLetterA = wordA.charAt(0);
  const lastLetterA = wordA.charAt(wordA.length - 1);
  const firstLetterB = wordB.charAt(0);
  const lastLetterB = wordB.charAt(wordB.length - 1);
  const firstLetterC = wordC.charAt(0);
  const lastLetterC = wordC.charAt(wordC.length - 1);
  const holi = upperLetters.push(
    firstLetterA.toUpperCase() +
      lastLetterA.toUpperCase() +
      firstLetterB.toUpperCase() +
      lastLetterB.toUpperCase() +
      firstLetterC.toUpperCase() +
      lastLetterC.toUpperCase()
  );

  console.log(upperLetters);
};

threeWords(['dulce', 'hogar', 'ñam']);
