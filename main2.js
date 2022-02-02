//Opdracht 3 - Array methoden en functies
// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een
// lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze
// array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.



//Opdracht 3a.const//
//Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst
// op de pagina weer te geven.
// Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan.
// Dat er dubbele namen in zitten, is niet erg.

// no comment, otherwise code for 3b redundant
//const list = document.getElementById('ListOfTvs');

//inventory.map((listOfTvs) => {
//    const actualList = document.createElement('li')
//    actualList.textContent = listOfTvs.brand;

//    return list.appendChild(actualList);
//});
//einde 3a. -------------------------------- //


//3b.
// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
// Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
// Tip: vergeet deze functie -declaratie niet aan te roepen!

function listOfTvBrands(array) {
    const list = document.getElementById('ListOfTvs');

    array.map((listOfTvs) => {
        const actualList = document.createElement('li')
        actualList.textContent = listOfTvs.brand;

        return list.appendChild(actualList);
    })
}

listOfTvBrands(inventory);

//eind van 3b. ------------------//

//Opdracht 4a:
// Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
// Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6])
// verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals
// Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
// Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

//possibility 1; empty function, no parameters, still works? ;
//function firstObject() {
//    return inventory[5].brand + ' ' + inventory[5].type + ' ' +  '-' + ' ' + inventory[5].name;
//}
//console.log(firstObject());

// possibility 2 ;
function getTvOut(tvDetails) {
    return `${tvDetails.brand}  ${tvDetails.type} - ${tvDetails.name}`;
}

console.log(getTvOut(inventory[6]));

//eind opdracht 4a.---------------------------//


// Opdracht 4b: Zorg ervoor dat de prijs van een tv netjes geformat wordt.
// Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt:
// €379,-. Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.

//1. function like above, but extract price. Maybe for the same TV.
//2. Add Eurosign and ,-
//3. Check out code with another TV element

function tvPrice(tvDetails) {
    return `€ ${tvDetails.price}` + ',-';
}

console.log(tvPrice(inventory[6]));
// eind opdracht 4b. --------------------------------------//


//Opdracht 4c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv
// , in zowel inches als cm. Doe dit door een functie te schrijven die één screen-sizes array verwacht
// ( zoals inventory[0].availableSizes) en de groottes op de volgende manier samenvoegt: [schermgrootte]
// inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
// Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm).
// Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch
// (127 cm) | 58 inch (147 cm). Test of jouw functie werkt in alle mogelijke gevallen.

function screenSizes(array) {
    if (array.availableSizes.length === 1) {
        let inchToCm = array.availableSizes * 2.54;
        let sizeInCm = Math.round(inchToCm);
        return array.availableSizes + ' ' + "inch" + ' ' + '(' + sizeInCm + "cm" + ')';
    } else {
        let output = "";
        for (let i = 0; i < array.availableSizes.length; i++) {
            let inchToCm = array.availableSizes[i] * 2.54;
            let sizeInCm = Math.round(inchToCm);
            output = output + array.availableSizes[i] + ' ' + "inch" + ' ' + '(' + sizeInCm + "cm" + ')';
            if (i !== array.availableSizes.length - 1) {
                output = output + ' | ';
            }
        }
        return output;
    }
}

console.log(screenSizes(inventory[6]));
//eind opdracht 4c -------------------------------------//

// Opdracht 4d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de
// pagina. Gebruik hiervoor de functies die je hebt gemaakt in opdracht 2b, 2d en 2e.

// Info name & description 4a :

//function getTvOut(tvDetails) {
//     return `${tvDetails.brand}  ${tvDetails.type} - ${tvDetails.name}`;
// }
//
// console.log(getTvOut(inventory[6]));



//const tvsSold = document.getElementById('soldTvs');
// const tvsSoldHeader = document.createElement('p1');
// tvsSoldHeader.textContent = "The amount of TVs sold today: ";
// tvsSoldHeader.setAttribute('id','sold-header');
//
// const totalSoldTvs = document.createElement('p2');
// totalSoldTvs.textContent = numberSalesTv;
// totalSoldTvs.setAttribute('id', 'sold-color');
//
// tvsSold.appendChild(tvsSoldHeader);
// tvsSold.appendChild(totalSoldTvs);


//logik:
//1. Output von 4a muss auf der Seite sichtbar sein.
//2. Output 4a muss in den code von 2b eingegeliedert werden - Farbe ist hierbei nicht wichtig.
//3. Also - erstmal ein <div> erstellen im HTML <div> Info TV1> check.
//4. Dann im JS file fuer den div (so) das Element Id ziehen.
//5. kreiere ein neues Element <p10> fuer eine neue const detailTV1 erstellen.
//6. detailsTV1.textcontent = getTvOut(inventory[6])
//7. infoTVone.appendchild(...), um die Info sichtbar auf der Webseite zu machen.

//start 4d.

const infoTvOne = document.getElementById('tvInfo');
const detailTvOne = document.createElement('p10');
detailTvOne.textContent = getTvOut(inventory[6]);

infoTvOne.appendChild(detailTvOne);









// Opdracht 4e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld.
// Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's,
// maar in de toekomst misschien wel 200! Gebruik in deze functie de voorgaande functies die je hebt geschreven,
// om onderdelen van de data te formatten.
// De overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten.
// Vergeet 'm niet aan te roepen!


