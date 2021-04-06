import Panier from './panierClass.js';

/* ---------------- P A G E - P A N I E R ---------------- */


let panier_json = sessionStorage.getItem("panier");
console.log(panier_json);
let panier = Object.assign(new Panier, JSON.parse(panier_json));
console.log(panier);

generatePanier(); /* HtmlString + Boucle ForEach pour créer dynamiquement le récapitulatif de commande */


function generatePanier(){

    let htmlString = '';
    let totalPrice = 0;
    for(let teddyId in panier.teddies){
        htmlString += getPanierTemplate(teddyId);
        totalPrice += panier.teddies[teddyId].price * panier.teddies[teddyId].quantity;
    };
    let teddyListCommand = document.getElementById('recapPanier'); /* Variable de la Div qui accueille le récapitulatif */
    teddyListCommand.innerHTML = htmlString;
    let priceCommand = document.getElementById("priceCommand"); /* Affichage du total Price dans le HTML */
    priceCommand.innerHTML = `Total de la commande: ${totalPrice} €`;
    bindRemoveTeddy(); /* Button pour Remove un article du panier */
}

function getPanierTemplate(teddyId){
    return `<div class="recapPanier__teddy">
                <div class="recapPanier__teddy__left">
                    <img src="${panier.teddies[teddyId].imageUrl}" alt="ours en peluche">
                </div>

                <div class="recapPanier__teddy__mid">
                    <div class="title">
                        <div class="title__name">
                            ${panier.teddies[teddyId].name}
                        </div>
                        <div class="incrementation">
                           X ${panier.teddies[teddyId].quantity} =
                        </div>
                        <div class="title__id">
                            ${panier.teddies[teddyId]._id}
                        </div>
                    </div>
                </div>

                <div class="recapPanier__teddy__right">
                    <div class="recapPanier__right__price"> 
                        ${panier.teddies[teddyId].price * panier.teddies[teddyId].quantity} $
                    </div>
                    <a class="teddyRemove" id="${teddyId}"> X </a>
                </div>
            </div>
            `;
}
function bindRemoveTeddy(){
    let btnTeddyRemove = document.getElementsByClassName("teddyRemove");

    Array.from(btnTeddyRemove).forEach((btnTeddy) => {
        btnTeddy.addEventListener('click', function(event){
            console.log(event.target.id);
            panier.removeItem(event.target.id);
            sessionStorage.setItem("panier", JSON.stringify(panier));
            console.log(JSON.parse(sessionStorage.panier));
            generatePanier();
        });
    });
}
