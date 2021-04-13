import Panier from './panierClass.js';

/* ---------------- P A G E - P A N I E R ---------------- */




let panier_json = sessionStorage.getItem("panier");
let panier = Object.assign(new Panier, JSON.parse(panier_json));
console.log(panier);

generatePanier(); /* HtmlString + Boucle ForEach pour créer dynamiquement le récapitulatif de commande */
if(!checkEmptyCart()){
    postCommand(); /* Ecoute du btn commande + envoie des data avec "POST" */
}




/* ---------------- F U N C T I O N S ---------------- */

function generatePanier() {
    if (checkEmptyCart()) {
        let emptyCart = document.getElementById('emptyCart');
        emptyCart.innerHTML = "<div><h2> P A N I E R - V I D E </h2></div>";
    } else {
        let htmlString = '';
        let totalPrice = 0;
        for (let teddyId in panier.teddies) {
            htmlString += getPanierTemplate(teddyId);
            totalPrice += panier.teddies[teddyId].price * panier.teddies[teddyId].quantity;
        };

        let teddyListCommand = document.getElementById('recapPanier'); /* Variable de la Div qui accueille le récapitulatif */
        teddyListCommand.innerHTML = htmlString;
        let priceCommand = document.getElementById("priceCommand"); /* Affichage du total Price dans le HTML */
        priceCommand.innerHTML = `Total de la commande: ${totalPrice} €`;

        bindRemoveTeddy(); /* Button pour Remove un article du panier */
    }
}

function checkEmptyCart() {
    return sessionStorage.panier === undefined || sessionStorage.panier === null || Object.keys(panier.teddies).length === 0;
}

function getPanierTemplate(teddyId) {
    return `<div class="recapPanier__teddy">
                <div class="recapPanier__teddy__left">
                    <img src="${panier.teddies[teddyId].imageUrl}" alt="ours en peluche">
                </div>

                <div class="recapPanier__teddy__mid">
                    <div class="title">
                        <div class="title__name">
                            ${panier.teddies[teddyId].name}
                            $${panier.teddies[teddyId].price} 
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
                        $${panier.teddies[teddyId].price * panier.teddies[teddyId].quantity}
                    </div>
                    <a class="teddyRemove" id="${teddyId}"> X </a>
                </div>
            </div>
            `;
}

function bindRemoveTeddy() {
    let btnTeddyRemove = document.getElementsByClassName("teddyRemove");
    Array.from(btnTeddyRemove).forEach((btnTeddy) => {
        btnTeddy.addEventListener('click', function (event) {
            console.log(event.target.id);
            panier.removeItem(event.target.id);
            sessionStorage.setItem("panier", JSON.stringify(panier));
            console.log(JSON.parse(sessionStorage.panier));
            generatePanier();
        });
    });
}

function postCommand() {
    let btnCommand = document.getElementById("btnCommand");
    btnCommand.addEventListener('click', function () {
        

        let objetContact = {
            lastName: document.getElementById("nom").value,
            firstName: document.getElementById("prenom").value,
            address: document.getElementById("adress").value,
            city: document.getElementById("ville").value,
            email: document.getElementById("email").value
        }

        if (objetContact.lastName 
            && objetContact.firstName 
            && objetContact.address 
            && objetContact.city 
            && objetContact.email 
            && !checkEmptyCart()){
            
            // let panierArray = Object.keys(panier.teddies).reduce((result, teddyId) => {
            //     result.push({teddyId: panier.teddies[teddyId].quantity})
            //     return result;
            // }, [])
            
            delay("commande.html");

            let panierArray = [];
            Object.keys(panier.teddies).forEach((teddyId) => {

                let quantity = (panier.teddies[teddyId].quantity);

                let i;
                for (i = 0; i < quantity; i++){
                    panierArray.push(teddyId);
                }
            })
    
            let commande = { contact: objetContact, products: panierArray };
    
            let postCommand = new XMLHttpRequest();
            postCommand.onreadystatechange = function () {
                if (this.readyState == XMLHttpRequest.DONE && this.status == 201){
                sessionStorage.setItem("order", this.response);
                console.log(JSON.parse(this.response));
                }
            }
            postCommand.open("POST", "http://localhost:3000/api/teddies/order");
            postCommand.setRequestHeader("content-Type", "application/json");
            postCommand.send(JSON.stringify(commande));
            console.log(JSON.stringify(commande));
        } 
    });
}

function delay (URL){
    setTimeout( function() {window.location = URL}, 500);
}