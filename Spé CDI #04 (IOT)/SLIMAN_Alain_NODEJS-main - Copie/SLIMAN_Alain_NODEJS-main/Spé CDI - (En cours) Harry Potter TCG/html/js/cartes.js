document.addEventListener("DOMContentLoaded", function () {
  // API URL
  const apiUrl = "https://hp-api.lainocs.fr/characters";

  const cardContainer = document.getElementById("card-container");
  const houseFilter = document.getElementById("house-filter"); //Bon j'ai le seum il a pas marché a ça va prendre le code au prof
  const filterButton = document.getElementById("filter-button");

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((cardData) => {
        const card = createCard(cardData);
        cardContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Erreur lors du fetch des données:", error);
    });

  // Créa d'la cate
  function createCard(cardData) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-house", cardData.house);
    card.classList.add(cardData.house.toLowerCase());

    const cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = cardData.image;
    cardImage.alt = "Image de la carte";

    const cardDetails = document.createElement("div");
    cardDetails.classList.add("card-details");

    const cardName = document.createElement("h2");
    cardName.classList.add("card-name");
    cardName.textContent = cardData.name;

    const cardLink = document.createElement("a");
    cardLink.classList.add("card-link");
    cardLink.href = `details.html?id=${cardData.id}`;
    cardLink.textContent = "Voir les détails";

    card.appendChild(cardImage);
    card.appendChild(cardDetails);
    cardDetails.appendChild(cardName);
    card.appendChild(cardLink);

    card.addEventListener("mouseover", function () {
      cardName.style.display = "block"; // affiche le nom de la carte lorsque survolé
    });

    card.addEventListener("mouseout", function () {
      cardName.style.display = "none"; // le caches
    });

    return card;
  }

  // ----------------------------------------Listener pour le filtre
  filterButton.addEventListener("click", function () {
    filterCardsByHouse(houseFilter.value);
  });

  // ------------------------------------------------------Fonc du filtre
  function filterCardsByHouse(house) {
    const cards = document.querySelectorAll(".card");

    // Envoi la maison filtré a l'index
    fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ houseData: house }),
    });

    cards.forEach((card) => {
      const houseName = card.getAttribute("data-house");
      card.classList.remove(
        "Gryffindor",
        "Hufflepuff",
        "Ravenclaw",
        "Slytherin"
      );

      if (house === "" || house === houseName) {
        card.style.display = "block";
        if (house === "Gryffindor") {
          card.classList.add("Gryffindor");
        } else if (house === "Hufflepuff") {
          card.classList.add("Hufflepuff");
        } else if (house === "Ravenclaw") {
          card.classList.add("Ravenclaw");
        } else if (house === "Slytherin") {
          card.classList.add("Slytherin");
        }
      } else {
        card.style.display = "none"; // Cache les autres cartes
      }
    });
  }

});
 






//function filterCardsByHouse(house) {
 // const cards = document.querySelectorAll(".card");

 // cards.forEach(card => {
   //   card.classList.remove('gryffindor', 'hufflepuff', 'ravenclaw', 'slytherin');  // Retire les classes précédentes
   //   if (house === "Gryffindor") {
    //      card.classList.add('gryffindor');
    //  } else if (house === "Hufflepuff") {
     //     card.classList.add('hufflepuff');
     // } else if (house === "Ravenclaw") {
     ///     card.classList.add('ravenclaw');
     // } else if (house === "Slytherin") {
     //     card.classList.add('slytherin');
     // }
 /// });
//}