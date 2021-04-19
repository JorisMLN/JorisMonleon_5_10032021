
/* ---------------- P A G E - C O M M A N D E ---------------- */


main();


/* ---------------- F U N C T I O N ---------------- */

function main() {
    let commande_json = sessionStorage.getItem("order");
    let commande = JSON.parse(commande_json);
    console.log(commande);

    let mainString = document.getElementById("main");
    mainString.innerHTML = getCommandTemplate(commande);

    // sessionStorage.clear();
    localStorage.clear();
}

function getCommandTemplate(commande) {
    return `
            <img src="images/logotest.png" class="appear__teddyItem1">
            <p class="main__thanks appear__teddyItem2">Merci beaucoup pour votre commande ! Vive les Teddies o/</p>
            <object data="images/thank-you.svg" width="70" height="70" class="appear__teddyItem3"> </object>
            <div class="sumAndId appear__teddyItem4">
                <div class="sumAndId__total">Total de la commande:
                    <div class="sumAndId__total__commande">
                        $ ${getTotalCommande(commande)}
                    </div>
                </div>
                <div class="sumAndId__id">Identifiant de la commande:
                    <div class="sumAndId__id__order">
                        ${commande.orderId}
                    </div>
                </div>
            </div>
            <div>
                <a href="index.html" class="appear__teddyItem5">Retour à la Home page</a>
            </div>
        `;
}

function getTotalCommande(commande) {
    let totalPrice = 0;
    for (let [teddyId] in commande.products) {
        totalPrice += commande.products[teddyId].price;
    };
    return totalPrice
}