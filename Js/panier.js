
/* ---------------- P A N I E R ---------------- */


/* Récupération des données du panier dans le sessionStorage */
let teddyCommand_json = sessionStorage.getItem("teddies");
console.log(sessionStorage);
let panier = JSON.parse(teddyCommand_json);
console.log(panier);

/* HtmlString + Boucle ForEach pour créer dynamiquement le récapitulatif de commande */
let htmlString = '';
let totalPrice = 0;
panier.teddies.forEach((teddy) => {
    htmlString += getPanierTemplate(teddy);
    totalPrice += teddy.price;
});

/* Variable de la Div qui accueille le récapitulatif */
let teddyListCommand = document.getElementById('recapPanier'); 
teddyListCommand.innerHTML = htmlString;

/* Affichage du total Price dans le HTML */
let priceCommand = document.getElementById("priceCommand");
priceCommand.innerHTML = `Total de la commande: ${totalPrice} €`;

function getPanierTemplate(teddy){
    return `<div class="recapPanier__teddy">
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
                    <a class="teddyRemove" id="${teddy._id}"> X </a>
                </div>

            </div>
        `;
}

/* Button pour Remove un article du panier */
let btnTeddyRemove = document.getElementsByClassName("teddyRemove");

Array.from(btnTeddyRemove).forEach((btnTeddy) => {
    btnTeddy.addEventListener('click', function(event){
        console.log(event.target.id);
        deleteTeddy();
    });
});

function deleteTeddy(){
    panier.removeItem(teddy.id);
}

/* Class pour le panier */
class Panier {
    constructor(owner, teddies){
        this.owner = owner;
        this.teddies = teddies;
    }
    addItem(teddy){
        this.teddies.push(teddy);
        console.log("ajouté")
    }
    removeItem(teddy){
        this.teddies.pull(teddy);
        console.log("enlevé")
    }
}