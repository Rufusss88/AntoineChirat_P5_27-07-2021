  
// DEFINITION VARIABLES IMPORTANTES
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
    commander();
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
    //SI LE PANIER EST PLEIN ON CACHE LE MESSAGE DU PANIER VIDE//
    paniervide.style.display = "none";
    //Ensuite on implémente les données contenu dans le local storage de manière dynamique en les dispatchant dans le panier//

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

//CALCUL ET AFFICHAGE TOTAL PANIER//

//Déclaration de la variable pour mettre les prix qui sont présent dans le panier//
let prixTotalCalcul = [];

//Aller chercher les prix dans le panier//
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

//AFFICHAGE DES PRODUITS DU PANIER FIN//


//VIDER LE PANIER//

function viderLePanier (){
    const viderLePanierBtn = document.querySelector(".viderlepanierbtn");
    viderLePanierBtn.addEventListener("click", () => {
        localStorage.clear();
    });
}
//VIDER LE PANIER FIN//


//PROCESS DE COMMANDE//

//SELECTION DU BOUTON ENVOYER FORMULAIRE//
function commander (){
let btnEnvoyer = document.querySelector("#envoiformulaire");
//ON EMPECHE LE COMPORTEMENT PAR DEFAUT DU FORMULAIRE//
document.querySelector(".validation").addEventListener("click", function(event) {
  event.preventDefault();
}, false);

//ADD EVENT LISTENER, RECUPERATION DES INFORMATIONS DAU CLICK SUR BOUTON VALIDER//
btnEnvoyer.addEventListener("click", ()=> {
  localStorage.setItem("firstName", document.querySelector("#name").value);
  localStorage.setItem("lastName", document.querySelector("#lastname").value);
  localStorage.setItem("address", document.querySelector("#address").value);
  localStorage.setItem("city", document.querySelector("#city").value);
  localStorage.setItem("email", document.querySelector("#email").value);


//METTRE LES VALEURS DU FORMULAIRE DANS UN OBJET CONTACT//

const contact = {
  firstName: localStorage.getItem("firstName"),
  lastName: localStorage.getItem("lastName"),
  address: localStorage.getItem("address"),
  city: localStorage.getItem("city"),
  email: localStorage.getItem("email"),
}

//ON ENREGISTRE L'OBJET CONTACT SOUS FORME DE CHAINE DE CARACTERES EN PAIRE CLE VALEUR DANS LE LOCAL STORAGE//

localStorage.setItem("contact", JSON.stringify(contact));

//ON ENREGISTRE LES PRODUITS SOUS FORME DE TABLEAU//
let products = [];

//ON CREE UNE VARIABLE CONSTANTE ORDER QUI CONTIENT LES PRODUITS SOUS FORME DE TABLEAU ET L'OBJET CONTACT//

const order = {
  contact,
  products,
};

localStorage.setItem("order", JSON.stringify(order));

//ENVOIE DE LA REQUETE POST AU BACKEND//
const promise = {
  method: "POST",
  body: JSON.stringify(order),
  headers : {
     "content-type" : "application/json",
    },
};
//ON DEFINIT LE TOTAL DE LA COMMANDE ET LE GARDE DANS UNE VARIABLE POUR L'AFFICHER SUR LA PAGE CONFIRMATION//
let priceConfirmation = document.querySelector(".totalcommande").innerText;

//ENVOI FETCH ET RECUPERATION DES DATA POUR AFFICHAGE SUR LA PAGE CONFIRMATION//

fetch("http://localhost:3000/api/cameras/order",  promise)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    localStorage.setItem("orderId", data.orderId);
    localStorage.setItem("total", priceConfirmation);
    document.location.href = "confirmation.html";
  })
})
}
//PROCESS DE COMMANDE FIN//
