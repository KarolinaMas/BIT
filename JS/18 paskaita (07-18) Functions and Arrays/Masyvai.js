// Array - masyvas
let array = [0, "text", false, undefined, null]; //typeof rodys kaip object duomens tipą.

// tarp lauštinių skliaustų gali būti įvairūs duomens tipai.

// indeksas - pozicijos numeris (indeksas), pozicijos skaičiuojamos nuo 0.

console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// For of :

for (let value of array) {
  console.log(value);
} // grąžinama tik reikšmė, indekso nėra.

// for in:
for (let index in array) {
  console.log(index);
} // console.log(array[index]); - iš masyvo pasirenkama tam tikra pozicija(indeksas).

const newArray = []; // Prvartu deklaruoti constanta, nes matyti pasikartojančios klaidos.

newArray[0] = "labas pasauli"; //kad ir su const kintamuoju galima keisti masyvo turinį nurodant indeksus.

// ARRAY METHODS:

// 1 būdas pridėt reikšmę į masyvą:
newArray[newArray.length] = 214; // reikšmė pridedama į pačią pabaigą.
console.log(newArray);

// 2 būdas pridėt reikšmę į masyvą:

const twoArray = [];
// Reikšmų pridėjimui į masyvą naudojamas push metodas, į galą, reikšmių kiekis neribojimas. Stringui ar kitam duomens tipui push neveikia.
twoArray.push("atia pasauli", 1554, 565, true);
console.log(twoArray);

// 3 unshift - reikšmę prideda į priekį:
twoArray.unshift("good");

const unshiftArray = [];
const wantedValue = "tik į priekį voveruškos!";
unshiftArray[unshiftArray.length] = wantedValue;

for (const value of twoArray) {
  unshiftArray[unshiftArray.length] = value;
}
console.log(unshiftArray);

// Sukurkite 100 elementų masyvą, kurio elemento reikšmės būtų atsitiktiniai skaičiai nuo 0 iki 500. Suskaičiuokite reikšmių sumą.
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomArray = [];

for (let i = 0; i < 100; i++) {
  randomArray.push(rand(0, 500));
}

let sum = 0;

for (const value of randomArray) {
  sum += value;
}
console.log("reiksmiu suma", sum);

// delete geriau nenaudoti pvz. delete unshiftedArray[0];
//Ištrynimas iš masyvo

// splice metodas - .splice(*reikšmė nuo kurio indekso pradedam trinti, *kiek reikšmių ištrinam)

unshiftArray.splice(0, 1); // 0 - indeksas, 1 - kiek reikšmių norim pakeisti.

unshiftArray.splice(0, 3, "Lauke sninga", "Hello World", 145);

// spread operatorius žymimas (...) - išskleid-ia visas reikšmes masyve, gerai naudoti su Math metodu.

//Sugeneruokite stringą, kurį sudarytų 50 atsitiktinių skaičių nuo 1 iki 200, atskirtų tarpais. Skaičiai turi būti unikalūs (t.y. nesikartoti). Sugeneruokite antrą stringą, pasinaudodami pirmu, palikdami jame tik pirminius skaičius (t.y tokius, kurie dalinasi be liekanos tik iš 1 ir patys savęs). Skaičius stringe sudėliokite didėjimo tvarka, nuo mažiausio iki didžiausio.
// su includes metodu:

const randomNumbers = [];
let string = "";

for (let i = 0; randomNumbers.length < 50; i++) {
  const skaicius = rand(1, 200);

  if (!randomNumbers.includes(skaicius)) randomNumbers.push(skaicius);
}

console.log(randomNumbers);
console.log(randomNumbers.join(`, `));

function isPrimeNumber(number) {
  let counter = 0;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) counter++;
  }

  return counter === 0;
}

const primeArray = [];

for (const number of randomNumbers) {
  if (isPrimeNumber(number))
    // true or false
    primeArray.push(number);
}

console.log(primeArray.join(", "));
