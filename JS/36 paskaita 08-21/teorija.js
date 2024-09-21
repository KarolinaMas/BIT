// hook`as - funkcija, kuri yra issaukiama, kai ivyksta kazkoks veiksmas, gali but grazinama reiksme.

// useState
// Reikia importuot: import { useState } from 'react'.
// grazinamas masyvas 0: reiksme(statine), 1: funkcija reiksmei keisti.
// useState('reiksme');
// const [text, setText] = useState('reiksme'); - issimam reiksmes ir priskiariam etiketes (kaip ir is objekto).

// eventuose naudot arrow funkcijas.

// onChange={(e) => setText(e.target.value)} - kas rasoma inpute, tas ir laukelyje atvaizduojama. Nebutina rasyt event uztenka e.
// norint priskirt dinamini kintamaji dedam[].
//  const handleForm = (e) => {
// setForm({ ...forma, [e.target.name]: e.target.value });
//   }; - funkcija duomenu issitraukimui is formos.

// jei reiksme yra undefiend galima useState() irasyti tuscia stringa arba tikrinti taip: <li>telefonas: {forma?.phone}</li>

// const [list, setList] = useState([]); - jei masyvas i useState deklaruojam tuscia masyva.

// {list.map((data, index) => (
//     <li key={index}>{data.value}</li>
// ))} - kiekvienas objekto key turi but skirtingas, todel kaip keyu naudojam masyvo indexa. Geriau naudoti hooka useId.
