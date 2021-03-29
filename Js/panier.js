/*  */

let teddyCommand_json = localStorage.getItem("teddyCommand");
console.log(localStorage);

let teddyCommand = JSON.parse(teddyCommand_json);
console.log(teddyCommand);


/* HtmlString + Boucle ForEach pour créer dynamiquement le récapitulatif de commande */
let htmlString = ''; 
teddyCommand.forEach((teddy) => {
    htmlString += `

    <div class="recapPanier__teddy">
        <div class="recapPanier__teddy__left">
            <img src="${teddy.imageUrl}" alt="ours en peluche">
        </div>
        <div class="recapPanier__teddy__mid">
            <div class="title">
                <div class="title__name">
                    ${teddy.name}
                 </div>
                <div class="title__id">
                    ${teddy._id}
                </div>
            </div>
        </div>
        <div class="recapPanier__right">
            <div class="row__right__price">
                ${teddy.price}
            </div>
            <a class="button" id="teddyRemove">
                X
            </a>
        </div>
    </div>
    `
});
/* Variable de la Div qui accueille le récapitulatif */
let teddyListCommand = document.getElementById('recapPanier'); 
teddyListCommand.innerHTML = htmlString;


/* Button pour Remove un article du panier */
let btnTeddyRemove = document.getElementById("teddyRemove");
btnTeddyRemove.addEventListener('click', function(){
    panier.removeItem(this.teddy);
});




// /* Ajout et suppression d'item */
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

// /* Panier */
// let panier = new Panier (
//     'John Doe',
//     []
// );
