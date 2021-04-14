
/* ---------------- P A G E - C O M M A N D E ---------------- */


main();


/* ---------------- F U N C T I O N ---------------- */

function main() {
    let commande_json = sessionStorage.getItem("order");
    let commande = JSON.parse(commande_json);
    console.log(commande);

    let mainString = document.getElementById("main");
    mainString.innerHTML = getCommandTemplate(commande);
}

function getCommandTemplate(commande) {
    return `
            <img src="images/logotest.png">
            <p class="main__thanks">Merci beaucoup pour votre commande ! Vive les Teddies o/</p>
            <p class="main__total">Total de la commande: ${getTotalCommande(commande)}</p>
            <p class="main__id">Identifiant de la commande: ${commande.orderId}</p>
    `;
}

function getTotalCommande(commande) {
    let totalPrice = 0;
    for (let [teddyId] in commande.products) {
        totalPrice += commande.products[teddyId].price;
    };
    return totalPrice
}