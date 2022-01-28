// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

//Opdracht 1 - Array Methoden
//---------------------------
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen.
// Log de uitkomst in de console.
const tvStock = inventory.map((tv) => {
    return tv.name;
});
console.log(tvStock);
//einde opdracht 1a.

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten)
// die volledig uitverkocht zijn. Log de uitkomst in de console.
let soldoutItems = [];
const soldOutTvs = inventory.filter((infoInventory) => {
    if (infoInventory.originalStock === infoInventory.sold) {
        return soldoutItems;
    }
})
console.log(soldOutTvs);
//einde opdracht 1b

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over
// AmbiLight beschikken. Log de uitkomst in de console.

const tvsAmbi = inventory.filter((ambiDetails) => {
    return ambiDetails.options.ambiLight === true
});
console.log(tvsAmbi);
//einde opdracht 1c.

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

let sortedTvByPrice = [];

const pricesTV = inventory.sort((a, b) => {
    return sortedTvByPrice = a.price - b.price;
});

console.log(pricesTV);
// einde opdracht 1d.
//---------------------------------------------------------//
//Opdracht 2 - Elementen in de DOM plaatsen
// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string,
// gebruik je hier gewoon een oude vertrouwde for-loop voor!
//
// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent.
// Log de uitkomst in de console.
// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

//---
// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent.

let numberOfTvsSold = 0;

for (let i = 0; i < inventory.length; i++) {
    numberOfTvsSold += inventory[i].sold;
}
console.log(numberOfTvsSold);
// einde opdracht 2a.

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

const tvsSold = document.getElementById('soldTvs')
const tvsSoldHeader = document.createElement('h1')
tvsSoldHeader.textContent = "The amount of TVs sold today"

const totalSoldTvs = document.createElement('h2')
totalSoldTvs.textContent = numberOfTvsSold

tvsSold.appendChild(tvsSoldHeader);
tvsSold.appendChild(totalSoldTvs);
// -------- color - green - styles.css under 5-7;
//einde opdracht 2b.

