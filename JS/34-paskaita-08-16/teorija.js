// npx create-react-app . - sukuriama naujas react projektas esamojoje direktorijoje.

// node_modules nekelti i gitHub!!
// gitignore failas automatiskai sukuriamas.
// trinam testiniais tikslais - setupTest.js, reportWebVitals.js (susitvarkyt index.js), appTest.js

// babel kompileris leidzia i js faila importuot css ir kitus failus ir importuojant nereik rasyt .js failo galunes.
// kiekviena karta is naujo paleidziant react projekta reikia komandos npm start.
// ctrl + c arba terminalo isjungimas - nutraukia programos veikima terminale.
// webpack
// jsx sintakseje: class="" = className=""

// ReactDOM - padaromas virtualus domas, kai padaromi pakeitimai, sis domas priskiriamas orginaliam domui.
// ReactDOM.createRoot(document.getElementById("root")) - sukuriamas pagrindinis divas kuriame daromi visi pakeitimai.
// visa kita yra uz React ribu, pvz., head

// manifesto faile aprasomos kokio dydzio skirtinguose irenginiuose iconos ir t.t

// visas modifikacijas daryti per js faila ne html.

// kai pakraunama aplikacija index.html failas ir kiti failai is public repozitorijos istraukiami i .js faila, ne atvirksciai, todel atsidarius su live server index.html faila matytumem tuscia puslapi.

// npm run build - js css html failai suspaudziami, nepaliekami tarpeliai.

// The build folder is ready to be deployed.
// You may serve it with a static server:

// npm install -g serve
// serve -s build

// jei panaudojus serve -s build meta errora power shele atsidarius kaip adminui suvest komanda: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted

// kol aplikacija gaminam dirbam src direktorijoj

// build darom kai pabaigiam savo projekta ir norim ji viesint ir kelt i githuba.

// kiekvienas failas vadinamas komponentu, kiekvienas komponento pavadinimas bus is didziosios raides, kad nesimaisytu su html komponentu pavadinimais.

// <App /> - issaukiamas komponentas.
// jsx sintaksej kiekvienas savaime uzsidarantis komponentas gale privalo tureti /

// apsirasyti komponentus galima naudoti funkcijas arba klases.
// prie kiekvieno komponento sukuriam ir tuo paciu pavadinimu css faila, juos keliam i komponento pavadinimu uzvadinta folderi

// jsx viena funkcija gali grazinti tik viena tevini elementa.

// <></> - fragmentas. Jei yra du ar daugiau teviniai elemnetai juos sudedam i fragmentu ir tada jsx veikia.

// Boostrap CDN linka deti i index.css faila: @import url(css linkas).
