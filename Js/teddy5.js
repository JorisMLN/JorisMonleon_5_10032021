let buttonTeddy5 = document.getElementById('buttonTeddy5');
buttonTeddy5.addEventListener('click', function(){
    panier.addItem(teddyMarcel);
    buttonTeddy5.textContent= "Article ajouté o/";
});