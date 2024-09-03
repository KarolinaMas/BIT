function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
Iškritus herbui;
Tris kartus iškritus herbui;
Tris kartus iš eilės iškritus herbui;*/


function tails(mode = 1) {
    let result = '';
    let counter = 0;
    let stopper = mode === 1 ? 1 : 3; // ? - nurodo if sąlygą, : - else sąlygą (terner). pilnas pvz.:
    // if(mode === 1){
    // stoper = 1;
    // } else {
    // stopper = 3;
    // }

    while (true) {
        let coin = rand(0, 1);

        if (coin === 0) {
            result += 'H';
            if (mode === 1)
                break;
            counter++;
        } else {
            result += 'S';

            if (mode === 3)
                counter = 0;

        }
        if (counter === stopper) {
            break;
        }
    }
    return result;
}

document.write(tails(1)); // tails(1) - A uzd. variantas, tails(2) - B ir tails(3) - C. Taip naudojant funkciją apsirašom visą užduotį. 

//game() creates simple checkers game simulation
//first = Player One Name
//second = Player Two Name
//pointsLimit = Limit of points when the game should stop

function game(first, second, pointsLimit) {
    let playerOne = 0;
    let playerTwo = 0;
    result = '';

    while (true) {
        let pop = rand(10, 20);
        let ptp = rand(5, 25);
        playerOne += pop;
        playerTwo += ptp;

        if (pop > ptp) {
            result += `Partiją laimėjo: ${first} <br />`;
        } else if (pop === ptp) {
            result += 'Įvyko lygiosios <br />';
        } else {
            result += `Partiją laimėjo: ${second} <br />`;
        }

        if (playerOne >= pointsLimit || playerTwo >= pointsLimit) {
            if (playerOne > playerTwo) {
                result += `Žaidimą laimėjo ${second}`;
            } else if (playerOne === playerTwo) {
                result += 'Žaidimas baigėsi lygiosiomis';
            } else {
                result += `Žaidimą laimėjo ${first}`;
            }
            break;
        }
    }

    return result;
}

document.write(game('Jonas', 'Martynas', 222));
document.write(game('Gabrielė', 'Darius', 1000));