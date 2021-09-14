let supprimerArticle = document.createElement("button");
debutDePanier.appendChild(supprimerArticle);
supprimerArticle.innerText = "Supprimer l'article du panier";
supprimerArticle.classList.add("idpanier");
supprimerArticle.classList.add(
"suppressionarticle"
);

let btnsupprimer = document.querySelectorAll(".suppressionarticle");
console.log(btnsupprimer );
for (let z = 0; 1 < btnsupprimer.length; z++){
btnsupprimer[z].addEventListener("click", (event) => {
event.preventDefault();

//ON SELECTIONNE l'ID DU PRODUIT A SUPPRIMER EN CLIQUANT SUR LE BOUTON//
let id_selectionner_suppression = tableauDesProduitsAuPanier[z]._id;
console.log(id_selectionner_suppression);

//METHODE FILTER POUR SIPPRIMER L'ELEMENT DE LA LIGNE CORRESPONDANTE AU BOUTON SUPPRIMER//
tableauDesProduitsAuPanier = tableauDesProduitsAuPanier.filter( element => element._id !== _id)
)};