
/* ---------------- P A G E - C O M M A N D E ---------------- */


let commande_json = sessionStorage.getItem("order");
let commande = JSON.parse(commande_json);
console.log(commande);

let mainString = document.getElementById("main");
mainString.innerHTML = getCommandTemplate(commande);




/* ---------------- F U N C T I O N ---------------- */

function getCommandTemplate(commande){
    return `
            <h2 class="main__title">Orinoco</h2>
            <p class="main__thanks">Merci beaucoup pour votre commande ! Vive les Teddies o/</p>
            <p class="main__total">Total de la commande: ${getTotalCommande()}</p>
            <p class="main__id">Identifiant de la commande: ${commande.orderId}</p>
    `;
}

function getTotalCommande(){
    let totalPrice = 0;
    for (let [teddyId] in commande.products) {
        totalPrice += commande.products[teddyId].price;
    };
    return totalPrice
}