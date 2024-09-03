// 1. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// let arrayL = 200;
// let counter1 = 0;
// let counter2 = 0;
// let counter3 = 0;
// let counter4 = 0;

// const letter = ["A", "B", "C", "D"];
// const arrayLetter = [];
// for (let l = 0; l < arrayL; l++) {
//   const index = rand(0, 3);
//   arrayLetter.push(letter[index]);
//   if (letter[index] === "A") {
//     counter1++;
//   }
//   if (letter[index] === "B") {
//     counter2++;
//   }
//   if (letter[index] === "C") {
//     counter3++;
//   }
//   if (letter[index] === "D") {
//     counter4++;
//   }
// }

const letters = "ABCD";
const letterArray = [];
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

for (let i = 0; i < 200; i++) {
  const letter = letters[rand(0, letters.length - 1)];
  letterArray.push(letter);

  if (letter === "A") counter1++;

  if (letter === "B") counter2++;

  if (letter === "C") counter3++;

  if (letter === "D") counter4++;
}

console.log(letterArray);

console.log(
  `A letters ${counter1}, B letters ${counter2}, C letters ${counter3}, D letters ${counter4}`
);

// 2. Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.

// letterArray.sort(); //.sort(isrusiuoja masyva pagal abecele)

// console.log(letterArray);

// 3. Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvus, sudėdami reiksmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.

function generateArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    const letter = letters[rand(0, letters.length - 1)];
    letterArray.push(letter);
  }
  return letterArray;
}

const arrayOne = generateArray(200);
const arrayTwo = generateArray(200);
const arrayThree = generateArray(200);
const masyvas = [];

for (const i in arrayOne) {
  masyvas[masyvas.length] = arrayOne[i] + arrayTwo[i] + arrayThree[i];
}

console.log(masyvas);

// 4. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

generateArray()

// 5. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.
// 6. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.
// 7. Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.
