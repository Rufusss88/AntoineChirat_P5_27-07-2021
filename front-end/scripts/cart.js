
let tableauDesProduitsAuPanier = JSON.parse(localStorage.getItem("product"));
console.table(tableauDesProduitsAuPanier);
let container = document.querySelector(".products_container");
let formulaire = document.querySelector(".panierformulaire");
let paniervide = document.querySelector(".paniervide");
let totaldiv = document.querySelector(".totalcommande");

main();

function main() {
    afficherPanier();
    viderLePanier();
}

//AFFICHAGE DES PRODUITS DU PANIER//
function afficherPanier() {

//PANIER VIDE//
if (tableauDesProduitsAuPanier === null){
    //Si le panier est vide alors on cache les variables container et panier formulaire//
    container.style.display = "none";
    formulaire.style.display = "none";
}
else{
    //Si le panier est plein, on cache la variable paniervide//
    paniervide.style.display = "none";
    //Ensuite on implémente les données contenu dans le local storage de manière dynamique en les dispatchant dans le panier//
    const products = tableauDesProduitsAuPanier;
    let debutDePanier = document.querySelector(".entetepanier")

    for (let product in tableauDesProduitsAuPanier) {

    let nomsProduitPanier = document.createElement("div");
    debutDePanier.appendChild(nomsProduitPanier);
    nomsProduitPanier.classList.add("nomspanier");
    nomsProduitPanier.innerHTML = tableauDesProduitsAuPanier[product].name;

    let quantitePanier = document.createElement("div");
    debutDePanier.appendChild(quantitePanier);
    quantitePanier.classList.add("quantitepanier");
    quantitePanier.innerHTML = tableauDesProduitsAuPanier[product].quantity;

    let prixPanier = document.createElement("div");
    debutDePanier.appendChild(prixPanier);
    prixPanier.innerHTML = tableauDesProduitsAuPanier[product].price * tableauDesProduitsAuPanier[product].quantity;
    prixPanier.classList.add(
      "prixpanier"
    );
    
  }
}}

//TOTAL PANIER//

//Déclaration de la variable pour mettre les prix qui sont présent dans le panier//
let prixTotalCalcul = [];

//aller chercher les prix dans le panier//
for (let m = 0; m < tableauDesProduitsAuPanier.length; m++){
  let prixProduitauPanier = tableauDesProduitsAuPanier[m].price * tableauDesProduitsAuPanier[m].quantity;

  //Mettre les prix du panier dans la variable prixTotalCalcul//
  prixTotalCalcul.push(prixProduitauPanier)
  console.log(prixTotalCalcul);
}

//Additioner tous les prix dans le tableau de la variable prixTotalCalcul avec la méthode .reduce//

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = prixTotalCalcul.reduce(reducer);
console.log(prixTotal);

//Afficher le prix total en HTML//
let totalCommande = document.createElement("div");
totaldiv.appendChild(totalCommande);
totalCommande.innerHTML = prixTotal;
totalCommande.classList.add("totalmontant");

//VIDER LE PANIER//

function viderLePanier (){
    const viderLePanierBtn = document.querySelector(".viderlepanierbtn");
    viderLePanierBtn.addEventListener("click", () => {
        localStorage.clear();
    });
}


