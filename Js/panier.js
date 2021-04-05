import Panier from './panierClass.js';

/* ---------------- P A G E - P A N I E R ---------------- */


let panier_json = sessionStorage.getItem("panier");
console.log(panier_json);
let panier = Object.assign(new Panier, JSON.parse(panier_json));
console.log(panier);

generatePanier(); /* HtmlString + Boucle ForEach pour créer dynamiquement le récapitulatif de commande */


function generatePanier(){

    let htmlString = '';
    // let totalPrice = 0;
    for(let teddyId in panier.teddies){

        htmlString += getPanierTemplate(teddyId);
    };
    let teddyListCommand = document.getElementById('recapPanier'); /* Variable de la Div qui accueille le récapitulatif */
    teddyListCommand.innerHTML = htmlString;
    bindRemoveTeddy(); /* Button pour Remove un article du panier */
}

function getPanierTemplate(teddyId){
    return `<div class="recapPanier__teddy">
                <div class="recapPanier__teddy__left">
                    <img src="" alt="ours en peluche">
                </div>

                <div class="recapPanier__teddy__mid">
                    <div class="title">
                        <div class="title__name">
                        
                        </div>
                        <div class="incrementation">
                           X ${panier.teddies[teddyId]}
                        </div>
                        <div class="title__id">
                            ${teddyId}
                        </div>
                    </div>
                </div>

                <div class="recapPanier__teddy__right">
                    <div class="recapPanier__right__price">
                        
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



 // totalPrice += teddy.price;
    // let priceCommand = document.getElementById("priceCommand"); /* Affichage du total Price dans le HTML */
    // priceCommand.innerHTML = `Total de la commande: ${totalPrice} €`;


/* ---------------- 2 N D E - W A Y ---------------- */

// function getPanierTemplate(teddyResponse){
//     return `<div class="recapPanier__teddy">
//                 <div class="recapPanier__teddy__left">
//                     <img src="${teddyResponse.imageUrl}" alt="ours en peluche">
//                 </div>

//                 <div class="recapPanier__teddy__mid">
//                     <div class="title">
//                         <div class="title__name">
//                         ${teddyResponse.name}
//                         </div>
//                         <div class="title__id">
//                             ${teddyResponse._id}
//                         </div>
//                     </div>
//                 </div>

//                 <div class="recapPanier__teddy__right">
//                     <div class="recapPanier__right__price">
                        
//                     </div>
//                     <a class="teddyRemove" id="${teddyResponse._id}"> X </a>
//                 </div>
//             </div>
//             `;
// }

// function bindRemoveTeddy(){
//     let btnTeddyRemove = document.getElementsById(`${teddyResponse._id}`);
//     btnTeddyRemove.addEventListener('click', function(){
//         panier.removeItem(`${teddyResponse._id}`);
//         sessionStorage.setItem("panier", JSON.stringify(panier));
//         console.log(JSON.parse(sessionStorage.panier));
//         generatePanier();
//     });
// }
