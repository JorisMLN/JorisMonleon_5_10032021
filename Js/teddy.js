
/* ---------------- T E D D Y ---------------- */


/* Récupération des paramètres dans l'URL */ /* exemple: ?id=5be9c8541c9d440000665243 */
let teddyParameters = window.location.search;
let teddyApiParameters = teddyParameters.substr(4);
console.log(teddyApiParameters); 

let requestTeddy = new XMLHttpRequest();
requestTeddy.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
        let teddy = JSON.parse(this.responseText);
        console.log(teddy);

        /* HTML dynamique pour les pages Teddy en details */
        htmlString = `
        <article class="teddy__page">
            <div class="teddy__page--left">
                <img src="${teddy.imageUrl}" alt="ours en peluche">
            </div>
            <div class="teddy__page--right">
                <div class="teddy__page--right--nameID">
                    <h1>${teddy.name}</h1>
                    <h2>ID: ${teddy._id}</h2>
                </div>
            <div class="teddy__page--right--description">
                <p> ${teddy.description} </p>
            </div>
            <div class="teddy__page--right--bottom">
                <div>-
                    <label> Couleur </label>
                    <select name="couleur" id="teddyColors">
                
                    </select>
                </div>
                <a class="button" id='buttonTeddy'>Ajouter au Panier</a>
            </div>
        </article>
        `
        /* Variable de la Div qui accueille le details */
        let teddyPage =  document.getElementById('teddyPage');
        teddyPage.innerHTML = htmlString;

        /* Boucle pour les couleurs des Teddies */
        let colorString = '';
        teddy.colors.forEach((colors) => {
                colorString += `
            <option>${colors}</option>
            `;
            });
        let teddyColors = document.getElementById('teddyColors'); 
        teddyColors.innerHTML = colorString; 
    }
}
requestTeddy.open("GET", `http://localhost:3000/api/teddies/${teddyApiParameters}`);
requestTeddy.send();



/* ---------------- P A N I E R ---------------- */

/* Ecoute du click d'ajout au panier */
let btnToCommand = document.getElementById('buttonTeddy');
btnToCommand.addEventListener('click', function(){
    let teddyCommand_json = sessionStorage.getItem("teddyCommand");
    console.log(teddyCommand_json);
    cart();
});

/* Function de gestion du panier pour le sessionStorage */
function cart() {
    if (teddyCommand == false){
        let panier = new Panier ('John Doe', []);
        panier.addItem(this.teddy);
        teddyCommand_json = sessionStorage.setItem("teddyCommand");
    } else {
        cartAlready();
    }
};

function cartAlready() {
    if (this.teddy == false){
        this.panier.addItem(this.teddy);
    } else {
        this.teddy ++;
    }
};

/* Class pour le panier */
class Panier {
    constructor(owner, teddies){
        this.owner = owner;
        this.teddies = teddies;
    }
    addItem(teddy){
        this.teddies.push(teddy);
        console.log(this.teddies)
        console.log("ajouté")
    }
    removeItem(teddy){
        this.teddies.pull(teddy);
        console.log(this.teddies)
        console.log("enlevé")
    }
}




/* LocalStorage vers la page "panier" */

// let btnToCommand = document.getElementById('buttonTeddy');
// btnToCommand.addEventListener('click', function(){
//     tedArray.push(teddy);
//     let teddyCommand_json = JSON.stringify(tedArray);
//     sessionStorage.setItem("teddyCommand", teddyCommand_json);
//     console.log(sessionStorage);
// });

// let teddyCommand_json = sessionStorage.getItem("teddyCommand");
// console.log(sessionStorage);