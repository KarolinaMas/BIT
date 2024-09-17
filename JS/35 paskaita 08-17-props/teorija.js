// karkase nurodoma specifine struktura kaip viskas turi but sudeliota, bibliotekoj ne.
// konsole automatiskai neatsinaujina dirbant su react, reikia isvalineti rankiniu budu.

// propsai - reacte funkcijoj paduodami parametrai ir argumentai.
// propsa galima uzvadint kaip nori.
// apsirasant komponenta nurodyti propsa (pvz, const Button (props) => {...{props.classes}}), o dedant komponento funkcija propsa aprasyti su html atributo sintakse (pvz., priskirti tam tikra klase). Propsu gali but ne vienas. shortcutas: const Button ({classes}) => {...{classes}});
// {} - jsx sintakseje cia galima js sintakse (masyvai, objektai, ciklai...).
// const Button (classes. text) => {...{classes}...{text}} - propsus galima isideti iskart kaip objekto key`jus.
// propsai dazniausiai eina is naujos eilutes, del tvarkingumo.

// style atributas kaip html, tacia jsx sintakseje jis paduodamas kaip objektas, sintakse: style={{fontSize: '14px', ...}}
// jei jsx reiksme yra null arba undefined narsykleje nebus atvaizduojama ta reiksme.
// norint susigrazint children - props.children; chlidren keyus saugo duomenis masyvo pavidale. JSX sintakseje masyvu nereikia apdoroti pries atvaizduojant narsykleje, objektus reikia.

// JSX naudojamas tik terner operatorius, o ne reguliarus if else. Cia galima naudoti && ir || operatorius.
// Kadangi Reactas null ir undefined neatvaizduoja, nebutina apsirasyti kondicijoje else varianto jei jis yra null ar undefined.
