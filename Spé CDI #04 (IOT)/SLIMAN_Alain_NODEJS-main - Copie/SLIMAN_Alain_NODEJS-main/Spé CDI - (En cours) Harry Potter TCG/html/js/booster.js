document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "https://hp-api.lainocs.fr/characters";
  const openBoosterButton = document.getElementById("open-booster");
  const cardDisplay = document.getElementById("card-display");

  openBoosterButton.addEventListener("click", function () {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((cards) => {
        displayRandomCards(cards);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des cartes:", error);
      });
  });

  function displayRandomCards(cards) {
    cardDisplay.innerHTML = ""; // Clear previous cards
    for (let i = 0; i < 5; i++) {
      // Assuming a booster contains 5 cards
      const randomIndex = Math.floor(Math.random() * cards.length);
      const card = cards[randomIndex];
      const cardElement = createCardElement(card);
      cardDisplay.appendChild(cardElement);
    }
  }

  function createCardElement(card) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const img = document.createElement("img");
    img.src = card.image;
    img.alt = card.name;

    const name = document.createElement("h3");
    name.textContent = card.name;

    cardDiv.appendChild(img);
    cardDiv.appendChild(name);

    return cardDiv;
  }
});
