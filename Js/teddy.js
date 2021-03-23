
/* Récupération dans le Session Storage */
let teddy_json = sessionStorage.getItem("teddies");
let teddy = JSON.parse(teddy_json);
console.log(teddy);

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
        <a class="button" id='buttonTeddy1'>Ajouter au Panier</a>
    </div>
</article>
`
let teddyPage =  document.getElementById('teddyPage');
teddyPage.innerHTML = htmlString;