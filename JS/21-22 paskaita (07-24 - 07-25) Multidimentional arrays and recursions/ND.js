// Sugeneruokite masyvą iš 10 elementų, kurio elementai būtų masyvai iš 5 elementų su reikšmėmis nuo 5 iki 25.

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const masyvas = [];

for (let i = 0; i < 10; i++) {
  masyvas[i] = []; // deklaruojam, kad pirminio masyvo i reikšmė bus masyvas!!!!!
  // šis ciklas generuos pirminį masyvą.
  for (let m = 0; m < 5; m++) {
    // šis ciklas generuoja pirminio masyvo viduje esančių masyvų reikšmes.
    masyvas[i].push(rand(5, 25));
    // masyvas[i][m] = rand(5, 25); irgi galimas  variantas.
  }
}

console.log(masyvas);

// 1. Naudodamiesi 1 uždavinio masyvu:
// a) Suskaičiuokite kiek masyve yra elementų didesnių už 10;
let counter = 0;

masyvas.filter((value) => {
  const filtered = value.filter((digit) => digit > 10);
  counter += filtered.length;
});

counter = 0;

for (const child of masyvas) {
  // apžvelgiam tėvinio masyvo reikšmes.
  for (const value of child) {
    // apžvelgiam dukterinio masyvo reikšmes.
    if (value > 10) counter++;
  }
}

console.log("Reikšmių didesnių nei dešimt yra: ", counter);

// b) Raskite didžiausio elemento reikšmę;
let max = 0;

for (const child of masyvas) {
  for (const value of child) {
    if (value > max) max = value;
  }
}

console.log("Didžiausia reikšmė elementuose yra:", max);

// c) Suskaičiuokite kiekvieno antro lygio masyvų su vienodais indeksais sumas (t.y. suma reikšmių turinčių indeksą 0, 1 ir t.t.)

const sum = [];
for (let x = 0; x < 5; x++) {
  sum[x] = 0;

  for (let i = 0; i < masyvas.length; i++) {
    sum[x] += masyvas[i][x];
  }
}

console.log("antro lygio masyvų su vienodais indeksais suma:", sum);

// d) Visus antro lygio masyvus “pailginkite” iki 7 elementų

for (let i = 0; i < 10; i++) {
  masyvas[i] = [];
  for (let m = 0; m < 7; m++) {
    masyvas[i].push(rand(5, 25));
  }
}
console.log(masyvas);

// 2. Sukurkite masyvą iš 10 elementų. Kiekvienas masyvo elementas turi būti masyvas su atsitiktiniu kiekiu nuo 2 iki 20 elementų. Elementų reikšmės atsitiktinai parinktos raidės iš intervalo A-Z. Išrūšiuokite antro lygio masyvus pagal abėcėlę (t.y. tuos kur su raidėm).

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "I",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const masyvasDu = [];

for (let i = 0; i < 10; i++) {
  const number = rand(2, 20);
  masyvasDu[i] = [];

  for (x = 0; x < number; x++) {
    masyvasDu[i][x] = alphabet[rand(0, alphabet.length - 1)];
  }
}

console.log(masyvasDu);

for (const raides of masyvasDu) {
  raides.sort(); //sort() - išrūšiuoja pagal abėcėlę.
}

console.log(masyvasDu);

// 3. Išrūšiuokite antro uždavinio pirmo lygio masyvą taip, kad elementai kurių masyvai trumpiausi eitų pradžioje. Masyvai kurie turi bent vieną “K” raidę, visada būtų didžiojo masyvo visai pradžioje.

//raidziuMasyvas.sort((a, b) => a.length - b.length);
masyvasDu.sort((a, b) => {
  if (a.includes("K") && !b.includes("K")) return -1;
  else if (!a.includes("K") && b.includes("K")) return 1;
  else return a.length - b.length;
});

console.log([...masyvasDu]);
