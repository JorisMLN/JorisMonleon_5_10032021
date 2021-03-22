let buttonTeddy3 = document.getElementById('buttonTeddy3');
buttonTeddy3.addEventListener('click', function(){
    panier.addItem(teddyLouis);
    buttonTeddy3.textContent= "Article ajouté o/";
});