fetch("https://api.github.com/users/jovipi/JoannaPineri_5_21122021")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(coucou) {
    console.log(coucou);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });