import Panier from './panierClass.js';

/* ---------------- P A G E - P A N I E R ---------------- */



/* Récupération des données du panier dans le sessionStorage */
let panier_json = sessionStorage.getItem("panier");
let panier = Object.assign(new Panier, JSON.parse(panier_json));
console.log(panier);

/* HtmlString + Boucle ForEach pour créer dynamiquement le récapitulatif de commande */
generatePanier();

function generatePanier(){
    let htmlString = '';
    let totalPrice = 0;
    for(let teddyId in panier.teddies){
        htmlString += getPanierTemplate(teddyId);
        // totalPrice += teddy.price;
    };
    /* Variable de la Div qui accueille le récapitulatif */
    let teddyListCommand = document.getElementById('recapPanier'); 
    teddyListCommand.innerHTML = htmlString;

    /* Affichage du total Price dans le HTML */
    let priceCommand = document.getElementById("priceCommand");
    priceCommand.innerHTML = `Total de la commande: ${totalPrice} €`;

    bindRemoveTeddy();
}


function getPanierTemplate(teddyId){
    // return `<div class="recapPanier__teddy">
    //             <div class="recapPanier__teddy__left">
    //                 <img src="${teddy.imageUrl}" alt="ours en peluche">
    //             </div>

    //             <div class="recapPanier__teddy__mid">
    //                 <div class="title">
    //                     <div class="title__name">
    //                         ${teddy.name}
    //                     </div>
    //                     <div class="incrementation">
    //                     x1
    //                     </div>
    //                     <div class="title__id">
    //                         ${teddyId}
    //                     </div>
    //                 </div>
    //             </div>

    //             <div class="recapPanier__teddy__right">
    //                 <div class="recapPanier__right__price">
    //                     ${teddy.price}
    //                 </div>
    //                 <a class="teddyRemove" id="${teddy._id}"> X </a>
    //             </div>

    //         </div>
    //     `;
    return `<div class="recapPanier__teddy">
    <div class="recapPanier__teddy__left">
        <img src="" alt="ours en peluche">
    </div>

    <div class="recapPanier__teddy__mid">
        <div class="title">
            <div class="title__name">
            
            </div>
            <div class="incrementation">
            ${panier.teddies[teddyId]}
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

/* Button pour Remove un article du panier */
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





