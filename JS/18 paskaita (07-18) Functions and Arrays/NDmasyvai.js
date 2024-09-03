// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const array = [];

for (let i = 0; i < 30; i++) {
  let index = rand(5, 25);
  array.push(index);
}
document.write("<h2>Masyvas</h2>", array.join(", "));

// Naudodamiesi 1 uždavinio masyvu:
// a) Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

const arrayOne = [];
let moreThanTen = 0;

for (let i = 0; i < 30; i++) {
  let indexOne = rand(5, 25);
  if (indexOne > 10) moreThanTen++;

  arrayOne.push(indexOne);
}
document.write("<h2>a) Masyvas:</h2>", arrayOne.join(", "));
document.write("<h3>Daugiau nei 10 yra:</h3>", moreThanTen);

// b) Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;

let max = 0;
let indexas = [];

for (const value of array) {
  if (value > max) max = value;
}

for (const i in array) {
  if (array[i] === max) {
    indexas.push(i);
  }
}

document.write("<h2>b) Didžiausia masyvo reikšmė/ės:</h2>", max);
document.write("<h3>Didžiausia masyvo reikšmės indeksai:</h3>", indexas);

// c) Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

let sum = 0;

for (const index in array) {
  if (index % 2 === 0) sum += array[index];
}

document.write("<h2>c) Porinių indeksų suma</h2>", sum);

// d) Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

let sub = 0;
const subArray = [];
let reiksmes = 0;

for (const index in array) {
  subArray[index] = array[index] - index; //array[index] - masyvo reiksme, index - masyvo indeksas.
}

document.write("<h2>d) Masyvas</h2>", subArray.join(", "));

//e) Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
let naujas = 0;

for (let i = 0; i < 9; i++) {
  naujas = rand(5, 25);
  subArray.push(naujas);
}
document.write("<h2>e) Masyvas</h2>", subArray.join(", "));

// f) Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;
arrayEven = [];
arrayOdd = [];

for (const index in array) {
  if (index % 2 === 0) {
    arrayEven.push(array[index]);
  } else {
    arrayOdd.push(array[index]);
  }
}
document.write("<h2>f) Porinių skaičių masyvas</h2>", arrayEven.join(", "));

document.write("<h2>f) Neporinių skaičių masyvas</h2>", arrayOdd.join(", "));

// g) Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
for (const i in array) {
  if (i % 2 === 0 && array[i] > 15) {
    array[i] = 0;
  }
}

document.write(
  "<h2>g) Pakeistas porinių skaičiu masyvas </h2>",
  array.join(", ")
);

// h) Naudodami funkciją splice() iš masyvo ištrinkite visus elementus kurių reikšmės didesnės už 10;

// for (const i in array) {
//   if (array[i] > 10) {
//     array.splice(i, 1);
//   }
// }

for (let i = array.length - 1; i >= 0; i--) {
  if (array[i] > 10) array.splice(i, 1);
}

document.write(
  "<h2>h) Ištrintos reikšmės didesnės už 10</h2>",
  array.join(", ")
);

// Naudodami funkciją splice() iš masyvo ištrinkite visus elementus turinčius porinį indeksą;

for (let i = array.length - 1; i >= 0; i--) {
  if (i % 2 === 0) array.splice(i, 1);
}
document.write(
  "<h2>i) Ištrintos reikšmės (poriniai ineksai)</h2>",
  array.join(", ")
);

// jei norim dirbti su pirminiu nepakitusiu masyvu :
// const nepakitesArray = [...array]; naudojam spread operatorių.
