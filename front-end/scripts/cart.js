
let arrayProductsInCart = JSON.parse(localStorage.getItem("product"));

console.log(arrayProductsInCart);

//AFFICHAGE DES PRODUITS DU PANIER//

//SELECTION DE LA CLASSE OU ON INJECTE LE CODE HTML//

//PANIER VIDE//
if (arrayProductsInCart === null){
    console.log("vide");
}
else{
    console.log("je suis plein");
}
