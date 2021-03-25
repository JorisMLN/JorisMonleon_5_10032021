/*  */

/* Récupération dans le Session Storage */
let teddy_json = sessionStorage.getItem("teddies");
let teddy = JSON.parse(teddy_json);
console.log(teddy);
console.log(teddy.colors);

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
        <div>
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

/* SessionStorage vers le panier */
let btnToCommand = document.getElementById('buttonTeddy');
btnToCommand.addEventListener('click', function(){
    let teddyCommand_json = JSON.stringify(teddy);
    console.log(teddyCommand_json);
    sessionStorage.setItem("teddyCommand", teddyCommand_json);
    console.log(sessionStorage);
});