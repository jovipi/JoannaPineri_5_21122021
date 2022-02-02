
// se connecter à l'api pour l'africhage des produits//
  fetch('http://localhost:3000/api/products')
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(canapes) {
    // On stocke les données récupérée, dans une variable canapes
    // On appelle la fonction createObjects, à laquelle on passe en paramètre les données
    createObjects(canapes);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });

  // Création de la class Kanap, qui permettra de créer les objets
  class Kanap{
    constructor(id,name,price,description,colors,altTxt){
      this.id = id;
      this.name = name;
      this.price = price ;
      this.description = description;
      this.colors = colors;
      this.altTxt = altTxt;
    }
  }

  // Création d'un tableau vide, qui permettra de stocker en suite, les nouveaux objets créés
  let arrayCanapes = [];

  function createObjects(canapes) {

    // Affichage des données récupérées depuis l'API
    console.log(canapes);

    // Création d'une boucle, pour créer un nouvel objet pour chacun des canapé trouvés dans la variables canapes
    for(Kanap of canapes) {
      arrayCanapes.push(new Kanap(canape._id, canape.imageUrl, canape.name, canape.price, canape.description, canape.colors, canape.altTxt));
    }

    // Affichage du tableau rempli avec les objets créés
    console.log(arrayCanapes);

    displayCanapes(arrayCanapes);

  }

  function displayCanapes(arrayCanapes) {
      alert('coucou');
  }
//boucle pour recherche produit dans tableau
for (canape of arrayCanapes){
let items = document.getElementById("items").innerHTML +=
`<a href="./product.html?id=${canape._id}">
 <article>
 <img src="${canape.imageUrl}" alt="${canape.altTxt}">
 <h3 class="productName">${canape.name}</h3>
 <p class="productDescription">${canape.description}</p>
</article>
</a>
`
}
//affichage Produits//