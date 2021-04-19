import Panier from './panierClass.js';

/* ---------------- P A G E - P A N I E R ---------------- */


main();


/* ---------------- F U N C T I O N S ---------------- */

function main() {
    // let panier_json = sessionStorage.getItem("panier");
    let panier_json = localStorage.getItem("panier");
    let panier = Object.assign(new Panier, JSON.parse(panier_json));
    console.log(panier);

    generatePanier(panier); /* HtmlString + Boucle ForEach pour créer dynamiquement le récapitulatif de commande */
    if (!checkEmptyCart(panier)) {
        postCommand(panier); /* Ecoute du btn commande + envoie des data avec "POST" */
    }
}

function generatePanier(panier) {
    if (checkEmptyCart(panier)) {
        let emptyCart = document.getElementById('emptyCart');
        emptyCart.innerHTML = "<div><h2> P A N I E R - V I D E </h2></div>";
    } else {
        let htmlString = '';
        let totalPrice = 0;
        for (let teddyId in panier.teddies) {
            htmlString += getPanierTemplate(teddyId, panier);
            totalPrice += panier.teddies[teddyId].price * panier.teddies[teddyId].quantity;
        };

        let teddyListCommand = document.getElementById('recapPanier'); /* Variable de la Div qui accueille le récapitulatif */
        teddyListCommand.innerHTML = htmlString;
        let priceCommand = document.getElementById("priceCommand"); /* Affichage du total Price dans le HTML */
        priceCommand.innerHTML = `Total de la commande: ${totalPrice} €`;

        bindRemoveTeddy(panier); /* Button pour Remove un article du panier */
    }
}

function checkEmptyCart(panier) {
    return localStorage.panier === undefined || localStorage.panier === null || Object.keys(panier.teddies).length === 0;
}

function getPanierTemplate(teddyId, panier) {
    return `<div class="recapPanier__teddy">
                <div class="recapPanier__teddy__left">
                    <img src="${panier.teddies[teddyId].imageUrl}" alt="ours en peluche">
                </div>

                <div class="recapPanier__teddy__mid">
                    <div class="title">
                        <div class="title__name">
                            ${panier.teddies[teddyId].name}
                            <div class="title__name--price">
                                $ ${panier.teddies[teddyId].price} 
                            </div>
                        </div>
                        <div class="title__incrementation">
                           X ${panier.teddies[teddyId].quantity} =
                        </div>
                        <div class="title__id">
                            Id :${panier.teddies[teddyId]._id}
                        </div>
                    </div>
                </div>

                <div class="recapPanier__teddy__right">
                    <div class="recapPanier__teddy__right__price"> 
                        $${panier.teddies[teddyId].price * panier.teddies[teddyId].quantity}
                    </div>
                    <a class="teddyRemove" id="${teddyId}"> X </a>
                </div>
            </div>
            `;
}

function bindRemoveTeddy(panier) {
    let btnTeddyRemove = document.getElementsByClassName("teddyRemove");
    Array.from(btnTeddyRemove).forEach((btnTeddy) => {
        btnTeddy.addEventListener('click', function (event) {
            console.log(event.target.id);
            panier.removeItem(event.target.id);
            localStorage.setItem("panier", JSON.stringify(panier));
            console.log(JSON.parse(localStorage.panier));
            generatePanier(panier);
        });
    });
}

function postCommand(panier) {
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
            && !checkEmptyCart(panier)) {

            // let panierArray = Object.keys(panier.teddies).reduce((result, teddyId) => {
            //     result.push({teddyId: panier.teddies[teddyId].quantity})
            //     return result;
            // }, [])
            let panierArray = [];
            Object.keys(panier.teddies).forEach((teddyId) => {

                let quantity = (panier.teddies[teddyId].quantity);

                let i;
                for (i = 0; i < quantity; i++) {
                    panierArray.push(teddyId);
                }
            })

            let commande = { contact: objetContact, products: panierArray };
            fetch("http://localhost:3000/api/teddies/order",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(commande)
                })
                .then((response) => {
                    return response.json()
                })
                .then((lastResponse) => {
                    sessionStorage.setItem("order", JSON.stringify(lastResponse));
                    window.location = "http://127.0.0.1:5500/commande.html";
                })
                .catch((error) => {
                    console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message)
                });

            // let postCommand = new XMLHttpRequest();
            // postCommand.onreadystatechange = function () {
            //     if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
            //         sessionStorage.setItem("order", this.response);
            //         console.log(JSON.parse(this.response));
            //         window.location = "http://127.0.0.1:5500/commande.html";
            //     }
            // }

            // postCommand.open("POST", "http://localhost:3000/api/teddies/order");
            // postCommand.setRequestHeader("content-Type", "application/json");
            // postCommand.send(JSON.stringify(commande));
            // console.log(JSON.stringify(commande));
        }
    });
}


