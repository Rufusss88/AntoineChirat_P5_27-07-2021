main();

function main () {
    afficherNumeroDeCommande();
}

function afficherNumeroDeCommande() {
    const orderID = document.querySelector(".orderid");
    const totalDeCommande = document.querySelector(".totaldelacommande");


orderID.innerText = localStorage.getItem("orderId");
totalDeCommande.innerText = localStorage.getItem("total");

//Vider le local storage car la commande est passée//


}