let buttonTeddy1 = document.getElementById('buttonTeddy1');
buttonTeddy1.addEventListener('click', function(){
    panier.addItem(teddyHubert);
    buttonTeddy1.textContent= "Article ajouté o/";
});