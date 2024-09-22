// useEffect, useState, useContext - trys pagrindiniai hookai naudojami React.
// kitus hookus irgi reikia importuoti kaip ir useState.\
// React.StrictMode - papildomai testuojama, todel du kartus console.log() atliekama.

// useEffect(1.funkcija, 2.dependencies). Kai atsinaujina dependencies is naujo pasijungia ir funkcija, kitas paaiskinimas: arba funkcija atsinaujina pasikeitus state. Tada nereikia rasyt kiekviena syki evento.
// to reikia jei perkraunami duomenys yra priristi prie local storage.
// negalima keiciamos reiksmes rasyti i dependencies, nes pasileis begaline rekursija.

// duomenu issitraukimas is localStorage pvz.:
// const [data, setData] = useState([]);

// useEffect(() => {
//     setData(JSON.parse(localStorage.getItem('products')));
// }, []);

// jei vykdomas atvaizdavimas ilgai kraunasi, pravartu uzdeti load`eri.
