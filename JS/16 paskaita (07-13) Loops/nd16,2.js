/*Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
Iškritus herbui;
Tris kartus iškritus herbui;
Tris kartus iš eilės iškritus herbui;*/

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let result = "";

while (true) {
  let coin = rand(0, 1);
  if (coin === 0) {
    result += "H";
    break;
  } else {
    result += "S";
  }
}
document.write(result);
// B
result = "";
let counter = 0;

while (true) {
  let coin = rand(0, 1);
  if (coin === 0) {
    result += "H";
    counter++;
  } else {
    result += "S";
  }
  if (counter === 3) {
    break;
  }
}
document.write(`<br /> ${result}`);

// C
result = "";
counter = 0;

while (true) {
  let coin = rand(0, 1);
  if (coin === 0) {
    result += "H";
    counter++;
  } else {
    result += "S";
    counter = 0;
  }
  if (counter === 3) {
    break;
  }
}
document.write(`<br /> ${result}`);

// 14d. užduotys.
/* 1.Kazys ir Petras žaidžia šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų. Žoūrėt į dėstytojo variantą geriau*/

let k = rand(5, 25);
let p = rand(10, 20);
let winner = "";

while (true) {
  p++;
  k++;

  if (k === 222 && p === 222) {
    winner = "lygiosios";
  }
  if (p >= 222) {
    winner = "Partiją laimėjo: Petras";
    break;
  } else if (k >= 222) {
    winner = "Partiją laimėjo: Kazys";
    break;
  }
}
document.write(`<br /> ${winner}`);
document.write(`<br /> ${p}`);
document.write(`<br /> ${k}`);

// Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami rand() funkcija. Vinnies ilgis 8.5cm (pilnai sulenda į lentą).
// a)“Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.

let length = 85 * 5;
counter = 0;

for (let i = 0; length > 0; i++) {
  length -= rand(5, 20);
  counter++;
}

document.write(`<br> smugiu kiekis: ${counter}`);

// b)“Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite rand() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.

let fail = rand(0, 1);
length = 85 * 5;
counter = 0;

for (let i = 0; length > 0; i++) {
  if (fail === 1) {
    length -= rand(20, 30);
    counter++;
  } else if (fail === 0) {
    counter + 0;
  }
}
document.write(`<br> dideliu smugiu kiekis: ${counter}`);

// Sugeneruokite stringą, kurį sudarytų 50 atsitiktinių skaičių nuo 1 iki 200, atskirtų tarpais. Skaičiai turi būti unikalūs (t.y. nesikartoti). Sugeneruokite antrą stringą, pasinaudodami pirmu, palikdami jame tik pirminius skaičius (t.y tokius, kurie dalinasi be liekanos tik iš 1 ir patys savęs). Skaičius stringe sudėliokite didėjimo tvarka, nuo mažiausio iki didžiausio.

for (let i = 0; i <= 50; i++) {}
