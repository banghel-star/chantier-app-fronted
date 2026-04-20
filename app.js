const API = "https://api.angpro.info/chantiers";

function charger() {

  fetch(API)

    .then(res => res.json())

    .then(data => {

      document.getElementById("liste").innerHTML =

        data.map(c => `<li>${c.nom}</li>`).join("");

    });

}

function ajouter() {

  const nom = document.getElementById("nom").value;

  fetch(API, {

    method: "POST",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({ nom })

  }).then(() => {

    document.getElementById("nom").value = "";

    charger();

  });

}

charger();
