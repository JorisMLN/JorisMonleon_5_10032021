
/* ---------------- P A N I E R ---------------- */


/* Récupération des données du panier dans le sessionStorage */
let teddyCommand_json = sessionStorage.getItem("teddies");
console.log(sessionStorage);
let teddyCommand = JSON.parse(teddyCommand_json);
console.log(teddyCommand);

/* HtmlString + Boucle ForEach pour créer dynamiquement le récapitulatif de commande */
let htmlString = '';
let totalPrice = 0;
teddyCommand.teddies.forEach((teddy, index) => {
    htmlString += getPanierTemplate(teddy, index);
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
// let btnTeddyRemove = document.getElementsById(`teddy${index}`);

let btnTeddyRemove = document.getElementsByClassName("teddyRemove");
Array.from(btnTeddyRemove).forEach((bob) => {
    bob.addEventListener('click', function(event){
        console.log(event.target.id);

        

    });
});

