/*  */

let teddyCommand_json = sessionStorage.getItem("teddyCommand");
console.log(sessionStorage);

let teddyCommand = JSON.parse(teddyCommand_json);
console.log(teddyCommand);

let teddiesArray = teddyCommand.teddies;
console.log(teddiesArray);


/* HtmlString + Boucle ForEach pour créer dynamiquement le récapitulatif de commande */
let htmlString = ''; 
teddiesArray.forEach((teddy, index) => {
    htmlString += `

    <div class="recapPanier__teddy">
        <div class="recapPanier__teddy__left">
            <img src="${teddy.imageUrl}" alt="ours en peluche">
        </div>
        <div class="recapPanier__teddy__mid">
            <div class="title">
                <div class="title__name">
                    ${teddy.name}
                 </div>
                <div class="title__id">
                    ${teddy._id}
                </div>
            </div>
        </div>
        <div class="recapPanier__right">
            <div class="row__right__price">
                ${teddy.price}
            </div>
            <a class="button" id="teddyRemove">
                X
            </a>
        </div>
    </div>
    `
});
/* Variable de la Div qui accueille le récapitulatif */
let teddyListCommand = document.getElementById('recapPanier'); 
teddyListCommand.innerHTML = htmlString;


/* Button pour Remove un article du panier */
let btnTeddyRemove = document.getElementById("teddyRemove");
btnTeddyRemove.addEventListener('click', function(){
    panier.removeItem(this.teddy);
});