main();

function main () {
    afficherNumeroDeCommande();
}

function afficherNumeroDeCommande() {
    const orderID = document.querySelector("orderid");


orderID.innerText = localStorage.getItem("orderId");

//Vider le local storage car la commande est passée//

localStorage.clear();
}