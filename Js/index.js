
/* class */
class Teddy {
    constructor(id, name, price, description, imageUrl){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}

/* Instance de class */
let teddyHubert = new Teddy (001, "Hubert", 33, "Le meilleur des Amis", URL="images/teddy_1.jpg");
let teddyMartin = new Teddy (002, "Martin", 29, "Le compagnon idéal", URL="images/teddy_2.jpg");
let teddyLouis = new Teddy (003, "Louis", 45, "Double de calin", URL="images/teddy_3.jpg");
let teddyGeorge = new Teddy (004, "George", 30, "Le pote d'enfance", URL="images/teddy_4.jpg");
let teddyMarcel = new Teddy (005, "Marcel", 25, "Le meilleur doudou", URL="images/teddy_5.jpg");

/* Ajout et suppression d'item */
class Panier {
    constructor(owner, teddies){
        this.owner = owner;
        this.teddies = teddies;
    }
    addItem(teddy){
        this.teddies.push(teddy);
        console.log(this.teddies)
    }
}

let panier = new Panier (
    'John Doe',
    []
);

