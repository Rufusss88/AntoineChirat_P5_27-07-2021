main();

function main() {getArticles();}

function getArticles() {
    fetch("http://localhost:3000/api/cameras")
      .then(function (res) {
        return res.json();
      })

      console.log(getArticles);

}