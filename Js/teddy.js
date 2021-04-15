import Panier from './panierClass.js';

/* ---------------- P A G E - T E D D Y ---------------- */


main();


/* ---------------- F U N C T I O N S ---------------- */

function main() {
    let teddyParameters = window.location.search;
    let teddyApiParameters = teddyParameters.substr(4);
    console.log(teddyApiParameters);

    fetch(`http://localhost:3000/api/teddies/${teddyApiParameters}`)
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
                <div class="plusUn">+1</div>
                <object data="images/teddy-bear.svg" width="120" height="120" class="appear__teddyItem4"> </object>
                <div class="teddy__page--right--bottom appear__teddyItem5">
                    <div class="teddyColor">
                        <label> Couleur : </label>
                        <select name="couleur" id="teddyColors">
                        </select>
                    </div>
                    <a class="button" id="buttonTeddy">Ajouter au Panier</a>
                    
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
    if (sessionStorage.panier === undefined || sessionStorage.panier === null) { /*(!sessionsStorage.teddies)*/
        panier = new Panier('John Doe', {});
    } else {
        let panier_json = sessionStorage.getItem("panier");
        panier = Object.assign(new Panier, JSON.parse(panier_json));
    }
    panier.addItem(teddy._id, teddy);
    sessionStorage.setItem("panier", JSON.stringify(panier));
    console.log(JSON.parse(sessionStorage.panier));
};




/* ---------------- 2 N D E - W A Y ---------------- */

// function main() {
//     /* Récupération des paramètres dans l'URL */ /* exemple: ?id=5be9c8541c9d440000665243 */
//     let teddyParameters = window.location.search;
//     let teddyApiParameters = teddyParameters.substr(4);
//     console.log(teddyApiParameters);

//     let requestTeddy = new XMLHttpRequest();
//     requestTeddy.onreadystatechange = function () {
//         if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
//             let teddy = JSON.parse(this.responseText);
//             console.log(teddy);

//             /* HTML dynamique pour les pages Teddy en details */
//             let htmlString = getArticleTemplate(teddy);

//             /* Variable de la Div qui accueille le details */
//             let teddyPage = document.getElementById('teddyPage');
//             teddyPage.innerHTML = htmlString;

//             /* Boucle pour les couleurs des Teddies */
//             setColorsOptions(teddy);

//             /* Ecoute du click d'ajout au panier */
//             addTeddyToCart(teddy);
//         }
//     }
//     requestTeddy.open("GET", `http://localhost:3000/api/teddies/${teddyApiParameters}`);
//     requestTeddy.send();
// }
