const mainContent = document.querySelector(".main-content");
const bbqContainer = document.querySelector(".bbq-container");
const burgerContainer = document.querySelector(".burger-container");
const dessertContainer = document.querySelector(".dessert-container");
const steakContainer = document.querySelector(".steak-container");
const drinksContainer = document.querySelector(".drinks-container");

let bbqs = db.bbqs;
let burgers = db.burgers;
let dessert = db.desserts;
let steaks = db.steaks;
let drinks = db.drinks;

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
  cardSubPara.className = "menu-card-price";

  return card;
}

function createBbqsDOMCard(container) {
  for (let i = 0; i < 12; i++) {
    let bbqsCards = createCard(bbqs[i]);

    container.append(bbqsCards);
  }
}

function createDessertDOMCard(container) {
  for (let i = 0; i < 12; i++) {
    let dessertCards = createCard(dessert[i]);

    container.append(dessertCards);
  }
}

function createBurgerDOMCard(container) {
  for (let i = 0; i < 12; i++) {
    let burgersCards = createCard(burgers[i]);

    container.append(burgersCards);
  }
}

function createSteaksDOMCard(container) {
  for (let i = 0; i < 12; i++) {
    let steaksCards = createCard(steaks[i]);

    container.append(steaksCards);
  }
}

function createDrinksDOMCard(container) {
  for (let i = 0; i < 12; i++) {
    let drinksCards = createCard(drinks[i]);

    container.append(drinksCards);
  }
}

function initializeCards() {
  createBbqsDOMCard(bbqContainer);
  createBurgerDOMCard(burgerContainer);
  createDessertDOMCard(dessertContainer);
  createSteaksDOMCard(steakContainer);
  createDrinksDOMCard(drinksContainer);
}
initializeCards();

var flags = document.getElementsByClassName("flag_link");

Array.prototype.forEach.call(flags, function (e) {
  e.addEventListener("click", function () {
    let lang = e.getAttribute("data-lang");
    console.log(lang);
    let languageSelect = document.querySelector("select.goog-te-combo");
    console.log(languageSelect);
    languageSelect.value = lang;
    languageSelect.dispatchEvent(new Event("change"));
  });
});
