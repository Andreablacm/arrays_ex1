// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const getRandomNumber = numbers => {
    const random = Math.floor(Math.random () * numbers.length);

    console.log(random);
}
getRandomNumber ([1, 2, 3, 4, 5]);


const getOperations = numbers => {

    const suma = numbers[0] + numbers[1] + numbers[2];
    console.log(suma);

    const media = (numbers[0] + numbers[1] + numbers[2]) / 3;
    console.log(media);}


getOperations ([1, 2, 3]);

const aleatoryNumbers = numbers => {
    const aleatory = Math.floor(Math.random () * 11);

    console.log(aleatory);
}

aleatoryNumbers ([ 2, 5, 8, 3, 6])


