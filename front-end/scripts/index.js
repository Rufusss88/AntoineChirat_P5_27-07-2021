
appelAPI();

//Appel a l'API avec fetch pour récupérer les données de tous les produits/*
function appelAPI() {
fetch('http://localhost:3000/api/cameras')
    .then(function(response) {
        return response.json()
    })
    .then((response) => {
      listProducts(response);
    }) 
    .catch((eror) => {
      let productsContainer = document.querySelector(".products_container");
        productsContainer.innerHTML =
          "Serveur indisponible";
        productsContainer.style.justifyContent = "center";
      })
}

function listProducts(createProducts) {
  const articles = createProducts;
  console.log(articles);
  for (let article in articles) {
  let productCard = document.createElement("div");
  document.querySelector(".products").appendChild(productCard);
  productCard.classList.add("product");
  productCard.style.width = "350px";
  productCard.style.position = "relative";
  productCard.style.display = "flex";
  productCard.style.flexDirection = "column";
  productCard.style.wordWrap = "break-word";
  productCard.style.backgroundColor = "#fff";
  productCard.style.backgroundClip = "border-box";
  productCard.style.border = "1px solid rgba(0, 0, 0, 0.125)";
  productCard.style.borderRadius = "2.25rem";

  let productLink = document.createElement("a");
  productCard.appendChild(productLink);
  productLink.href = `product.html?id=${createProducts[article]._id}`;
  productLink.classList.add("product_link");

  let productImgDiv = document.createElement("div");
  productLink.appendChild(productImgDiv);
  productImgDiv.classList.add("product__image_div");

  let productImg = document.createElement("img");
  productImgDiv.appendChild(productImg);
  productImg.src = createProducts[article].imageUrl;
  productImg.classList.add("card-img-top");

  let productInfosDiv = document.createElement("div");
  productLink.appendChild(productInfosDiv);
  productInfosDiv.classList.add("card_body");
  productInfosDiv.classList.add("p4");

  let productInfoTitle = document.createElement("div");
  productInfosDiv.appendChild(productInfoTitle);
  productInfoTitle.classList.add("product_name");
  productInfoTitle.innerText = createProducts[article].name;
  productInfoTitle.style.textDecoration = "none";
  productInfoTitle.style.color = "black";
  productInfoTitle.style.fontWeight = "bolder";
  productInfoTitle.style.marginBottom = "20px";


  let productInfoPrice = document.createElement("div");
  productInfosDiv.appendChild(productInfoPrice);
  productInfoPrice.classList.add("product_price");
  productInfoPrice.innerHTML = createProducts[article].price;
  productInfoPrice.style.textDecoration = "none";
  productInfoPrice.style.color = "black";
  productInfoPrice.style.fontWeight = "bolder";
  productInfoPrice.style.marginBottom = "20px";

  let productInfoDetails = document.createElement("button");
  productInfosDiv.appendChild(productInfoDetails);
  productInfoDetails.classList.add("product_seedetails", "bn632", "bn22");
  productInfoDetails.innerText = "Voir le produit"
  productInfoDetails.style.fontWeight = "bolder";
  productInfoDetails.style.justifyContent = "center";
  productInfoDetails.style.alignItems = "center";
  productInfoDetails.style.textAlign = "center";
  
  // Formatage du prix pour l'afficher en euros
  createProducts[article].price = createProducts[article].price / 100;
  productInfoPrice.innerHTML = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(createProducts[article].price);
  }
}
 
    