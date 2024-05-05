document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const cardId = params.get("id"); // Récupère l'ID de l'URL

  if (cardId) {
    fetchCardDetails(cardId);
  }

  function fetchCardDetails(id) {
    fetch(`https://hp-api.lainocs.fr/characters/${id}`)
      .then((response) => response.json())
      .then((data) => displayCardDetails(data))
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des détails de la carte:",
          error
        )
      );
  }

  function displayCardDetails(cardData) {
    const container = document.getElementById("card-detail-container");

    const cardName = document.createElement("h1");
    cardName.textContent = cardData.name;

    const cardImage = document.createElement("img");
    cardImage.src = cardData.image;
    cardImage.alt = `Image de ${cardData.name}`;

    const cardHouse = document.createElement("p");
    cardHouse.textContent = `Maison: ${cardData.house}`;

    // Supposons que vous voulez afficher l'attribut 'attaque', vérifiez d'abord que cette info est disponible via l'API
    const cardAttack = document.createElement("p");
    cardAttack.textContent = `Attaque: ${cardData.attack}`; // Assurez-vous que l'API fournit une propriété 'attack'

    container.appendChild(cardName);
    container.appendChild(cardImage);
    container.appendChild(cardHouse);
    container.appendChild(cardAttack);
  }
});
