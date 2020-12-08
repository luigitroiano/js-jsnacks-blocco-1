// JSnack 1A Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10

// var palla = {
//   name: 'palla',
//   weight: 5,
// }
// console.log(palla);

//////////////////////////////////

// // JSnack 1B attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

// palla.weight = Number(prompt('Inserisci il nuovo peso della palla'));

/////////////////////////////////

// JSnack 2 Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore.

// var bici = [
//   {
//     nome: 'bianchi',
//     peso: 7,
//   },
//   {
//     nome: 'Trek',
//     peso: 9,
//   },
//   {
//     nome: 'ciccio',
//     peso: 11,
//   }
// ];
// var minPeso = bici[0].peso;
// var x;
// for (var i = 0; i < bici.length; i++) {
//   if (bici[i].peso < minPeso) {
//     minPeso = bici[i].peso;
//     x = i;
//   };
// }
// console.log(minPeso);
// console.log(bici[x]);
////////////////////////////////////////

// JSnack 3 Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.
// (ripassiamo il Teorema di Pitagora ;D )

// var triangolo = {
//   base: 5,
//   altezza: 9,
// }
// // perimetro
// var base = triangolo.base;
// var altezza = triangolo.altezza;
// var ipotenusa = Math.sqrt(base*base + altezza*altezza);
// var perimetro = base + altezza + ipotenusa;
// console.log('Perimetro: ' + perimetro);

// //area
// console.log('Area: ' + (base * altezza) /2);

///////////////////////////////////////////////

// JSnack 4A Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// var squadre = [
//   {
//     nome: 'Napoli',
//     punti: 0,
//     falli: 0,
//   },
//   {
//     nome: 'Reggina',
//     punti: 0,
//     falli: 0,
//   },
//   {
//     nome: 'Empoli',
//     punti: 0,
//     falli: 0,
//   }
// ]

// //////////////////////////////////////////

// // JSnack 4B Generare numeri random al posto degli 0 nelle proprietà:
// // punti fatti e falli subiti

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
// }


// squadre.push({
//   punti: getRandomInt(1, 60),
//   falli: getRandomInt(1, 20),
// })
// console.log(squadre);
// squadre.forEach(function (item) {
//   item.punti = getRandomInt(1, 60);
//   item.falli = getRandomInt(1, 20);
// });
// console.log(squadre);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////  //        //      //////   //////     //         //////
//  /// //      //  //   //       //        //  //       //
//////  //     //    // //       //        //    //      //////
//  /// //      //  //   //       //        //  //           //
//////  //////    //      //////   //////     //         //////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JSnack 1 
// Crea 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


// JSnack 2
// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)


// JSnack 3
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine


// JSnack 4
// Scrivi una funzione che fonda due array (con lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


// JSnack 5
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”