// esminis skirtumas tarp objekto ir masyvo yra tai, kad masyve per ciklą kreipiamės į tam tikrą poziciją, o objekte kreipsimės tiesiogiai į 'key'(etikitę).

// Masyvo funkcijos pvz. map() galioja tik masyvui.

const object = {
  //Savybės - properties
  vardas: "Vilius",
  data: "2023-07-26",
  statusas: false,
  menesis: 10,
  zmones: ["Eglė, Juozas, Antanas"], // jei yra laužtiniai skliaustai, veiks masyvo metodai.
  vardas: "Petras",
  //Metodai - methods
  keistiVarda: function (vardas) {
    this.vardas = vardas; // this raktažodis nurodo, kad kreipiamės būten į šį objektą.
  },
};

console.log(object.data);

object.menesis = 12; // pakeičiam reikšmę.

console.log(object);

// objekte negalim taip pačiai kreiptis į deklaruotą kintamajį kaip į objekte esantį key. Į kintamajį kreipiamės naudojant []. object[kintamojo etiketė]
let x = "vardas";
object[x];
object[x] = "karole"; // pakeičiam reikšmę.

console.log(object[x]);

//Chaining - grandininė reakcija
const object3 = {
  pet: "dog",
  age: 3,
  setPet: function (pet) {
    this.pet = pet;
    return this; //privalomas returnas, kad butu grazinamas objektas ir sekmingai ivyktu chainingas.
  },
  setAge: function (age) {
    this.age = age;
    return this;
  },
};

object3.setPet("cat").setAge(10); // taip kreipiamės į objekto funkciją.

object3.setPet("cat").setAge(10);

// let string = 'Labas Pasauli';

// string = string.replaceAll('a', '-').replaceAll('b', '-'); - chainingas

// console.log(string);

console.log(object3);
