let buttonTeddy4 = document.getElementById('buttonTeddy4');
buttonTeddy4.addEventListener('click', function(){
    panier.addItem(teddyGeorge);
    buttonTeddy4.textContent= "Article ajouté o/";
});