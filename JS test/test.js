//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs.
const a = 3;
const b = 5;

if (a > b) {
  console.log(a);
} else if (a === b) {
  console.log("skaiciai lygus.");
} else {
  console.log(b);
}

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 1; i <= 5; i++) {
  let randomNum = rand(1, 10);
  console.log("4uzd" + " " + randomNum);
}

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.

while (true) {
  let randomNum = rand(1, 10);
  console.log("5uzd" + " " + randomNum);

  if (randomNum === 5) break;
}

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų.

let arrayRand = [];
let maxValue = 0;

for (let i = 0; i < rand(20, 30); i++) {
  arrayRand.push(rand(10, 30));

  if (maxValue < arrayRand[i]) {
    maxValue = arrayRand[i];
  }
}

console.log(`Masyvas: ${arrayRand}, didziausia reiksme: ${maxValue}`);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės.

let letterArr = [];
let A = 0;
let B = 0;
let C = 0;
let D = 0;

for (let i = 0; i < 100; i++) {
  const randLetter = rand(1, 4);
  let letter = "";

  if (randLetter === 1) {
    letter = "A";
  } else if (randLetter === 2) {
    letter = "B";
  } else if (randLetter === 3) {
    letter = "C";
  } else {
    letter = "D";
  }

  if (letter === "A") {
    A++;
  } else if (letter === "B") {
    B++;
  } else if (letter === "C") {
    C++;
  } else {
    D++;
  }

  letterArr.push(letter);
}

console.log(`masyvas: ${letterArr}, A: ${A}, B: ${B}, C: ${C}, D: ${D}`);

// // 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė.

function lygineSuma(var1, var2) {
  if (typeof var1 === "number" && typeof var2 === "number") {
    if ((var1 + var2) % 2 !== 0) {
      return "suma nelygine.";
    } else {
      return var1 + var2;
    }
  } else if (typeof var1 === "object" && typeof var2 === "object") {
    if ((var1.length + var2.length) % 2 !== 0) {
      return "suma nelygine.";
    } else {
      return var1.length + var2.length;
    }
  }
}

console.log(lygineSuma([4], [3, 7]));

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)

function pirminisSkaicius(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  // Check divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If divisible, not prime
    }
  }

  return true; // If no divisors found, the number is prime
}

console.log(pirminisSkaicius(7));

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX".

const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function telefonoNumeris(arr) {
  const str = arr.join("");
  console.log(`(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6, 10)}`);
}

telefonoNumeris(testArr);
