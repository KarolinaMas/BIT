// for(let i = 0; i < 10; i++) {
//     //Iteracija
// console.log(i);
// i++;
// }

// rekursija:
function add(n) {
  console.log(n);
  if (n < 10) add(n + 1);

  console.log("Kodas paleistas"); // sita eilute bus vykdoma kai nus ispildyta salyga if statmente.
  return n; // grazins funkcijos argumenta.
}

console.log(add(0));

function sum(a, b, callback) {
  callback();
  return a + b;
}

function print() {
  console.log("Veiksmas įvyko");
}

console.log(sum(10, 20, print));

const masyvas = [30, 22, 15];
// const naujasMasyvas = [];

// for(let i = 0; i < masyvas.length; i++) {
//     naujasMasyvas.push(masyvas[i] + 10);
// }

//Su map metodu:

// function addToValue(reiksme, indeksas, originalusMasyvas) {
//     return reiksme + 10;
// }

// const naujasMasyvas = masyvas.map(addToValue);

// console.log(naujasMasyvas);

//Perduodant funkciją iš karto be pavadinimo

// const naujasMasyvas = masyvas.map(function(reiksme, indeksas, originalusMasyvas) {
//     return reiksme + 10;
// });

// console.log(naujasMasyvas);

//Su arrow funkcija:

// const naujasMasyvas = masyvas.map(reiksme => return reiksme + 10);

// console.log(naujasMasyvas);

// function map(masyvas, callback) {
//     const naujasMasyvas = [];

//     for(let i = 0; i < masyvas.length; i++) {
//         naujasMasyvas.push(callback(masyvas[i], i, masyvas));
//     }

//     return naujasMasyvas;
// }

// console.log(map(masyvas, (v, i, a) => v + 10));

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

function countDown(number) {
  console.log(number);

  if (number - 1 > 0) countDown(number - 1);
}

countDown(5);

//Map metodas yra skirtas generuoti naują masyvą pagal seno masyvo duomenis
[10, 20, 30, 10].map((value, index, arr) => {
  console.log(arr);
});

//console.log(newArray);

// const filteredArray = [99, 55, 18, 2, 22].filter((value, index, arr) => {
//     // return value < 15; //true
//     if(value < 15) {
//         return true;
//     } else {
//         return false;
//     }
// });

//Filter metodas yra naudojamas reikšmėms išfiltruoti iš esamo masyvo:
const filteredArray = [99, 55, 18, 2, 22].filter(
  (value) => value < 15 && value > 1
);
console.log("Filtruotas masyvas", filteredArray);

//Find metodas grąžina pirmą reikšmę atitinkančią sąlygą:
const foundElements = [99, 55, 18, 2, 22].find((value) => value > 18);
console.log(foundElements);

//FindIndex metodas grąžina pirmo rasto elemento indeksą:
const foundIndex = [99, 55, 18, 2, 22].findIndex((value) => value > 18);
console.log(foundIndex);
