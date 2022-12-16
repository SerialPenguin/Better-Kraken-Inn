const mainContent = document.querySelector(".main-content");

let bbqs = db.bbqs;
let burgers = db.burgers;

function createCard(meny) {
  // CREATES A TEMPLATE FOR EACH CARD
  const card = document.createElement("article");
  const cardHeader = document.createElement("h3");
  const cardPara = document.createElement("p");
  const cardSubPara = document.createElement("p");
  
  card.style.backgroundImage = `url('${meny.img}')`;

  cardHeader.textContent = meny.name;
  cardPara.textContent = meny.dsc;
  cardSubPara.textContent = meny.price;

  card.appendChild(cardHeader);
  card.appendChild(cardPara);
  card.appendChild(cardSubPara);

  card.className = "menu-card";
  cardHeader.className = "menu-card-header";
  cardPara.className = "menu-card-text";

  return card;
}

/* test code */
function createDOMCard(container) {
  // let test = bbqs.length;
  for (let i = 0; i < 1; i++) {
    let bbqsCards = createCard(bbqs[i]);
    let burgersCards = createCard(burgers[i]);

    container.append(bbqsCards);
    container.append(burgersCards);
  }
}

createDOMCard(mainContent);
