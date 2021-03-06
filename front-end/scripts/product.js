let params = new URL(document.location).searchParams;
let id = params.get("id");

const productImage = document.querySelector("img");
const productTitle = document.querySelector(".product_name");
const productPrice = document.querySelector(".product_price");
const cameraNum = document.querySelector("#cameraNum");
const lensesSelect = document.querySelector("#lensesSelect");
let currentProduct;

main();

function main() {
  appelAPI();
  ajouterAuPanier();
}

//AFFICHER LES DONNÉES DU PRODUIT SUR LA PAGE PRODUIT//
function appelAPI() {
  fetch(`http://localhost:3000/api/cameras/${id}`)
        .then(function(response) {
            return response.json()
        })
        .catch((eror) => {
        let productsContainer = document.querySelector(".products_container");
          productsContainer.innerHTML =
            "Serveur indisponible";
          productsContainer.style.justifyContent = "center";
        })

        .then (function (createProducts) {
          //IMPLEMENTATION DONNES DE L'API SUR INFOS PRODUITS//
          currentProduct = createProducts;
          article = createProducts;
          productTitle.innerText = article.name;
          productImage.src = article.imageUrl;
          productPrice.innerText = article.price.value ;

          //FORMATAGE EN EUROS//
          article.price = article.price / 100;
          productPrice.innerText = new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
          }).format(article.price);

          //IMPLEMENTATION INPUT RADIO POUR CHOIX DE L'OBJECTIF//
          let lensesSelect = document.getElementById("lensesSelect");
          for (let i = 0; i < article.lenses.length; i++) {
          let option = document.createElement("option");
          option.innerText = article.lenses[i];
          lensesSelect.appendChild(option);


      }
        });
      }



//AJOUT ET ENVOI DES PRODUITS AU PANIER//

function ajouterAuPanier() {
  const ajouterAuPanierBtn = document.querySelector(".addtocard");
  
  ajouterAuPanierBtn.addEventListener("click", () => {
    if (cameraNum.value > 0 && cameraNum.value < 100) {
      console.log("currentProduct:", currentProduct);
      //CRÉATION DES DONNÉES PRODUITS//
      let produitAjoute = {
        name: productTitle.innerHTML,
        price: currentProduct.price,
        quantity: parseFloat(document.querySelector("#cameraNum").value),
        _id: id,
      };

      const textconfirmation = document.querySelector(".textconfirmation");
      textconfirmation.innerText = "Votre produit a bien été ajouté au panier";

      const options = document.querySelector(".options");
      options.style.display = "flex";

      //LOCAL STORAGE//
      //AFFICHAGE DES PRODUITS SOUS FORME DE TABLEAU POUR ENVOI AU LOCAL STORAGE//
      let tableauDesProduitsAuPanier = [];
      //AJOUT LIGNE UNIQUE PRODUIT//
      let flag = false;
      if (localStorage.getItem("product") !== null) {
        tableauDesProduitsAuPanier = JSON.parse(localStorage.getItem("product"));
        for (let s=0; s < tableauDesProduitsAuPanier.length; s++){
          if (tableauDesProduitsAuPanier[s]._id == produitAjoute._id){
            flag= true;
            tableauDesProduitsAuPanier[s].quantity = parseInt(tableauDesProduitsAuPanier[s].quantity)+ parseInt(produitAjoute.quantity)
          }
        }
        if (!flag) {
          tableauDesProduitsAuPanier.push(produitAjoute);
        }
      } else {
        tableauDesProduitsAuPanier.push(produitAjoute);
      }
        
        localStorage.setItem("product", JSON.stringify(tableauDesProduitsAuPanier));
    }
  });
}




