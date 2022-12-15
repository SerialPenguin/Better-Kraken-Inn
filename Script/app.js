const mainContent = document.querySelector(".main-content");

function createCard(meny) {
  // CREATES A TEMPLATE FOR EACH CARD
  const card = document.createElement("article");
  const cardHeader = document.createElement("h3");
  const cardPara = document.createElement("p");
  const cardSubPara = document.createElement("p");

  card.innerHTML = `<img class ="card-img" src="${meny.imgSrc}" alt="${meny.alt}" width = "100">`;

  cardHeader.textContent = meny.title;
  cardPara.textContent = meny.para;
  cardSubPara.textContent = meny.subCat;

  card.appendChild(cardHeader);
  card.appendChild(cardPara);
  card.appendChild(cardSubPara);

  card.className = "menu-card";

  return card;
}

/* test code */
function createDOMCard(container) {
  let test = meny.length;
  for (let i = 0; i < test; i++) {
    let cards = createCard(meny[i]);

    container.append(cards);
  }
}

createDOMCard(mainContent);
