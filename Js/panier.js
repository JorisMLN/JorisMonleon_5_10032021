/*  */

let teddyCommand_json = sessionStorage.getItem("teddyCommand");
console.log(sessionStorage);
let teddyCommand = JSON.parse(teddyCommand_json);
console.log(teddyCommand);


/* Ajout et suppression d'item */
// class Panier {
//     constructor(owner, teddies){
//         this.owner = owner;
//         this.teddies = teddies;
//     }
//     addItem(teddy){
//         this.teddies.push(teddy);
//         console.log(this.teddies)
//         console.log("ajouté")
//     }
//     removeItem(teddy){
//         this.teddies.pull(teddy);
//         console.log(this.teddies)
//         console.log("enlevé")
//     }
// }

/* Panier */
// let panier = new Panier (
//     'John Doe',
//     []
// );

/* HtmlString + Boucle ForEach pour créer dynamiquement le récapitulatif de commande */
// let htmlString = ''; 
// teddyCommand.forEach((teddy, index) => {
//     htmlString += `

//     <div class="recapPanier__teddy">
//         <div class="recapPanier__teddy__left">
//             <img src="${teddy.imageUrl}" alt="ours en peluche">
//         </div>
//         <div class="recapPanier__teddy__mid">
//             <div class="title">
//                 <div class="title__name">
//                     ${teddy.name}
//                  </div>
//                 <div class="title__id">
//                     ${teddy._id}
//                 </div>
//             </div>
//         </div>
//         <div class="recapPanier__right">
//             <div class="row__right__price">
//                 ${teddy.price}
//             </div>
//             <a href="teddy.html" class="button" id="teddy${index}">
//                 Voir l'article
//             </a>
//         </div>
//     </div>
//     `
// });
// /* Variable de la Div qui accueille le récapitulatif */
// let teddyListCommand = document.getElementById('recapPanier'); 
// teddyListCommand.innerHTML = htmlString; 