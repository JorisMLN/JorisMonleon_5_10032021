/* Requete Teddies*/

let requestTeddies = new XMLHttpRequest();
requestTeddies.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
        let response = JSON.parse(this.responseText);
        console.log(response);

        let htmlString = '';
        response.forEach((teddy, index) => {
            htmlString += `

            <div class="row">
                <div class="row__left">
                    <img src="${teddy.imageUrl}" alt="ours en peluche">
                </div>
                <div class="row__mid">
                    <div class="title">
                    <div class="title__name" id="teddy${index}">
                        ${teddy.name}
                    </div>
                        <div class="title__id">
                            ${teddy._id}
                        </div>

                    </div>
                    <div class="row__mid__description">
                        ${teddy.description}
                    </div>
                </div>
                <div class="row__right">
                    <div class="row__right__price">
                        ${teddy.price}
                    </div>
                    <a href="teddy1Hubert.html"  class="button">
                        Voir l'article
                    </a>
                </div>
            </div>
            `
        });
        let teddyList = document.getElementById('teddyList');
        teddyList.innerHTML = htmlString;
    }
};
requestTeddies.open("GET", "http://localhost:3000/api/teddies");
requestTeddies.send();



/* Ajout et suppression d'item */
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

/* Panier */
// let panier = new Panier (
//     'John Doe',
//     []
// );


/* 

1 - Récupérer les articles venant du serveur (cf AJAX)(Page Index).
2 - Afficher dynamiquement les differents produits sur la page index 
après les avoir recuperé du serveur (cf Array Javascript, String template multiline).
3 - Afficher dynamiquement les détails d'un article en recupérant ses données 
à partir du serveur (cf AJAX,String tamplate mulltilne).

*/
