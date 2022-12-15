const mainContent = document.querySelector(".main-content");

function createCard(objekt) {
  // CREATES A TEMPLATE FOR EACH CARD
  const card = document.createElement("article");
  const cardHeader = document.createElement("h3");
  const cardPara = document.createElement("p");
  const cardSubPara = document.createElement("p");

  card.innerHTML = `<img class ="card-img" src="${objekt.imgSrc}" alt="${objekt.alt}" width = "100">`;
  card.appendChild(cardHeader);
  card.appendChild(cardPara);
  card.appendChild(cardSubPara);

  cardHeader.textContent = objekt.title;
  cardPara.textContent = objekt.para;
  cardSubPara.textContent = objekt.subCat;

  card.className = "menu-card";

  return card;
}

/* test code */
function createDOMCard(container) {
  for (let i = 0; i < 9; i++) {
    let cards = createCard(i);

    container.append(cards);
  }
}

createDOMCard(mainContent);
