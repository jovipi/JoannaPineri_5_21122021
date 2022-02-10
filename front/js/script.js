
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
    constructor(id,name,price,description,colors,altTxt,imageUrl){
      this.id = id;
      this.name = name;
      this.price = price ;
      this.description = description;
      this.colors = colors;
      this.altTxt = altTxt;
      this.imageUrl = imageUrl;
    }
  }

  // Création d'un tableau vide, qui permettra de stocker en suite, les nouveaux objets créés
  let arrayCanapes = [];

  function createObjects(canapes) {

    // Affichage des données récupérées depuis l'API
    //console.log(canapes);

    // Création d'une boucle, pour créer un nouvel objet pour chacun des canapé trouvés dans la variables canapes
    for(objet of canapes) {
      arrayCanapes.push(new Kanap(objet._id, objet.name, objet.price, objet.description, objet.colors, objet.altTxt, objet.imageUrl));
    }

    // Affichage du tableau rempli avec les objets créés
    //console.log(arrayCanapes);

    displayCanapes(arrayCanapes);
    // Afficher //

  }

  function displayCanapes(arrayCanapes) {
      alert('coucou');

      console.log(arrayCanapes);
      //boucle pour recherche produit dans tableau
      for (canapes of arrayCanapes){

        console.log(canapes);
        console.log(canapes.name);

        document.getElementById("items").innerHTML +=
        `<a href="./product.html?id=${canapes._id}">
          <article>
            <img src="${canapes.imageUrl}" alt="${canapes.altTxt}">
            <h3 class="productName">${canapes.name}</h3>
            <p class="productDescription">${canapes.description}</p>
          </article>
        </a>
        `
      }

  }


//boucle pour recherche produit dans tableau


//affichage Produits//
