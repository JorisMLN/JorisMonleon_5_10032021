import baseURL from './const.js';
// import baseURL from './export.js';


/* ---------------- T E D D I E S ---------------- */

main();

/* ---------------- F U N C T I O N S ---------------- */

/* Récupération des data sur le serveur */
function main(){
    fetch(baseURL)
    .then((response) => {
        return response.json()
    })
    .then((theResponse) => {
        console.log(theResponse);
        loopHtmlString(theResponse);
    })
    .catch((error) => { 
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message)
        teddyList.innerHTML = "<h2> OUPS, le serveur ne veut pas nous parler :( </h2>"
    });
}

/* Boucle de création dynamique de la list de teddy */
function loopHtmlString(theResponse) {
    let teddyList = document.getElementById('teddyList');

    let htmlString = '';
    theResponse.forEach((teddy, index) => {
        let delay = (index*150) + "ms";
        htmlString += `

        <div class="row appear__item" style="animation-delay: ${delay};">
            <div class="row__left">
                <img src="${teddy.imageUrl}" alt="ours en peluche">
            </div>
            <div class="row__mid">
                <div class="title">
                    <div class="title__name">
                        ${teddy.name}
                    </div>
                </div>
                <div class="row__mid__description">
                    ${teddy.description}
                </div>
                </div>
            <div class="row__right">
                <div class="row__right__price">
                $${teddy.price}
                </div>
                <a href="teddy.html?id=${teddy._id}" class="button">
                    Voir l'article
                </a>
            </div>
        </div>

        `
    });
    teddyList.innerHTML = htmlString;
}
