//Opdracht 3 - Array methoden en functies
// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een
// lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze
// array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
// Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
// Tip: vergeet deze functie -declaratie niet aan te roepen!

//Opdracht 3a.

let tvBrands = inventory.map(inventory => inventory.brand);
console.log(tvBrands);

const listTvBrands = document.getElementById('listOfTvBrands');
const tvBrandsHeader = document.createElement('h2');
tvBrandsHeader.textContent = "We offer the following TV-Brands: ";
listTvBrands.appendChild(tvBrandsHeader);

const listBrands = document.createElement('p7');
listTvBrands.textContent = tvBrands;

listTvBrands.appendChild(tvBrandsHeader);
listTvBrands.appendChild(tvBrands);






