
let tableauDesProduitsAuPanier = JSON.parse(localStorage.getItem("product"));
console.table(tableauDesProduitsAuPanier);
let container = document.querySelector(".products_container");
let formulaire = document.querySelector(".panierformulaire");
let paniervide = document.querySelector(".paniervide");

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
    const product = tableauDesProduitsAuPanier;
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
    prixPanier.innerHTML = tableauDesProduitsAuPanier[product].price;
    prixPanier.classList.add(
      "prixpanier"
    );

    let currency = document.createElement("div");
    prixPanier.appendChild(currency);
    currency.innerText = "€";

  }
}}

//VIDER LE PANIER//

function viderLePanier (){
    const viderLePanierBtn = document.querySelector(".viderlepanierbtn");
    viderLePanierBtn.addEventListener("click", () => {
        localStorage.clear();
    });
}

//TOTAL PANIER -> Problème pour convertir le prix de chaine de caractère à nombre//

//VERIFICATION DES DONNEES DU FORMULAIRE//
const submit = document.querySelector("#submit");
let inputName = document.querySelector("#name");
let inputLastName = document.querySelector("#lastname");
let inputPostal = document.querySelector("#postal");
let inputCity = document.querySelector("#city");
let inputAdress = document.querySelector("#adress");
let inputMail = document.querySelector("#mail");
let inputPhone = document.querySelector("#phone");

//ON SE PLACE A L'ECOUTE DE L'EVENEMENT CLICK POUR VERIFIER LES DONNES DU FORMULAIRE//

if (
    !inputName.value ||
    !inputLastName.value ||
    !inputPostal.value ||
    !inputCity.value ||
    !inputAdress.value ||
    !inputMail.value ||
    !inputPhone.value
  ) {
    erreur.innerHTML = "Vous devez renseigner tous les champs !";
    e.preventDefault();
  } else if (isNaN(inputPhone.value)) {
    e.preventDefault();
    erreur.innerText = "Votre numéro de téléphone n'est pas valide";
  } else {
    let productsBought = [];
    productsBought.push(tableauDesProduitsAuPanier);

}
