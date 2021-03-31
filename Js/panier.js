
/* ---------------- P A N I E R ---------------- */


/* Récupération des données du panier dans le sessionStorage */
let teddyCommand_json = sessionStorage.getItem("teddies");
console.log(sessionStorage);
let teddyCommand = JSON.parse(teddyCommand_json);
console.log(teddyCommand);

/* HtmlString + Boucle ForEach pour créer dynamiquement le récapitulatif de commande */
let htmlString = ''; 
teddyCommand.teddies.forEach((teddy) => {
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
                <div class="incrementation">
                   x12
                </div>
                <div class="title__id">
                    ${teddy._id}
                </div>
            </div>
        </div>

        <div class="recapPanier__teddy__right">
            <div class="recapPanier__right__price">
                ${teddy.price}
            </div>
            <a class="teddyRemove"> X </a>
        </div>

    </div>
    `
});
/* Variable de la Div qui accueille le récapitulatif */
let teddyListCommand = document.getElementById('recapPanier'); 
teddyListCommand.innerHTML = htmlString;

/* Boucle ForEach pour le calcul du total */

let totalPrice = 0;
teddyCommand.teddies.forEach((teddy) => {
    totalPrice += (teddy.price);
});
let totalPriceString = `Total de la commande: ${totalPrice} €`;

let priceCommand = document.getElementById("priceCommand");
priceCommand.innerHTML = `${totalPriceString}`;



/* Button pour Remove un article du panier */
// let btnTeddyRemove = document.getElementsByClassName("teddyRemove");
// btnTeddyRemove.addEventListener('click', function(){
//     teddyCommand.teddies
//     .removeItem(this.teddy);
// });