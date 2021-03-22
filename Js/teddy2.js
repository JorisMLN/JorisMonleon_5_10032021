let buttonTeddy2 = document.getElementById('buttonTeddy2');
buttonTeddy2.addEventListener('click', function(){
    panier.addItem(teddyMartin);
    buttonTeddy2.textContent= "Article ajouté o/";
});