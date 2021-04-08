
/* ---------------- T E D D I E S ---------------- */


/* Requete WEB pour avoir les tableaux des teddies*/
let requestTeddies = new XMLHttpRequest();
requestTeddies.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
        let response = JSON.parse(this.responseText);
        console.log(response);

        /* HtmlString + Boucle ForEach pour créer dynamiquement la liste de Teddy */
        let htmlString = ''; 
        response.forEach((teddy) => {
            htmlString += `

            <div class="row">
                <div class="row__left">
                    <img src="${teddy.imageUrl}" alt="ours en peluche">
                </div>
                <div class="row__mid">
                    <div class="title">
                    <div class="title__name">
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
                    <a href="teddy.html?id=${teddy._id}" class="button">
                        Voir l'article
                    </a>
                </div>
            </div>
            `
        });
        /* Variable de la Div qui accueille le tableau */
        let teddyList = document.getElementById('teddyList'); 
        teddyList.innerHTML = htmlString; 
    }
};
requestTeddies.open("GET", "http://localhost:3000/api/teddies");
requestTeddies.send();
