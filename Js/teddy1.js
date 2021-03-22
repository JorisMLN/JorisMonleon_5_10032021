
let buttonTeddy1 = document.getElementById('buttonTeddy1');
buttonTeddy1.addEventListener('click', function(){
    panier.addItem(teddyHubert);
    buttonTeddy1.textContent= "Article ajouté o/";
    let teddyHubert_json = JSON.stringify(teddyHubert);
    console.log(teddyHubert_json);
    sessionStorage.setItem("teddy", teddyHubert_json);
});
