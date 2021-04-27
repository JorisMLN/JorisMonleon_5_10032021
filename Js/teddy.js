import Panier from './panierClass.js';
import baseURL from './const.js';

/* ---------------- P A G E - T E D D Y ---------------- */

main();

/* ---------------- F U N C T I O N S ---------------- */

/* Récupération des des paramètres de l'URL du teddy */
function main() {
    let teddyParameters = window.location.search;
    let teddyApiParameters = teddyParameters.substr(4);
    console.log(teddyApiParameters);

    /* Récupération des data sur le serveur */
    fetch(baseURL + "/" + teddyApiParameters)
        .then((response) => {
            return response.json()
        })
        .then((teddy) => {
            console.log(teddy);
            /* HTML dynamique pour les pages Teddy en details */
            let htmlString = getArticleTemplate(teddy);

            /* Variable de la Div qui accueille le details */
            let teddyPage = document.getElementById('teddyPage');
            teddyPage.innerHTML = htmlString;

            /* Boucle pour les couleurs des Teddies */
            setColorsOptions(teddy);

            /* Ecoute du click d'ajout au panier */
            addTeddyToCart(teddy);
        })
        .catch((error) => {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message)
        });
}

function getArticleTemplate(teddy) {
    return `<article class="teddy__page">

                <div class="teddy__page--left appear__teddyItem1">
                    <img src="${teddy.imageUrl}" alt="ours en peluche">
                </div>

                <div class="teddy__page--right appear__teddyItem2">

                    <div class="teddy__page--right--nameID">
                        <h1>${teddy.name}</h1>
                        <h2>ID: ${teddy._id}</h2>
                    </div>

                    <div class="teddy__page--right--description appear__teddyItem3">
                        <p> ${teddy.description} </p>
                    </div>

                    <div class="teddyColor appear__teddyItem4" >
                        <label> Couleur : </label>
                        <select name="couleur" id="teddyColors">
                        </select>
                    </div>

                    <div class="teddy__page--right--bottom appear__teddyItem5">
                        <div class="blocBtn">
                            <a class="button" id="buttonTeddy">Ajouter au Panier</a>
                        </div>
                        <!-- <div class="plusUn">+1</div> -->
                        <object data="images/teddy-bear.svg" width="100" height="100" > </object>
                    </div>
                </div>
            </article>
        `;
}


function setColorsOptions(teddy) {
    let colorString = '';
    teddy.colors.forEach((colors) => {
        colorString += `
            <option>${colors}</option>
            `;
    });
    let teddyColors = document.getElementById('teddyColors');
    teddyColors.innerHTML = colorString;
}

function addTeddyToCart(teddy) {
    let btnToCommand = document.getElementById('buttonTeddy');
    btnToCommand.addEventListener('click', function () {
        cart(teddy);
    });
}

/* Function de gestion du panier pour le sessionStorage */
function cart(teddy) {
    let panier;
    if (localStorage.panier === undefined || localStorage.panier === null) {
        panier = new Panier('John Doe', {});
    } else {
        let panier_json = localStorage.getItem("panier");
        panier = Object.assign(new Panier, JSON.parse(panier_json));
    }
    panier.addItem(teddy._id, teddy);
    localStorage.setItem("panier", JSON.stringify(panier));
    console.log(JSON.parse(localStorage.panier));
};

