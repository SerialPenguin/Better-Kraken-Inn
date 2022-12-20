const mainContent = document.querySelector(".main-content");
const bbqContainer = document.querySelector(".bbq-container");
const burgerContainer = document.querySelector(".burger-container");
const dessertContainer = document.querySelector(".dessert-container");
const steakContainer = document.querySelector(".steak-container");
const drinksContainer = document.querySelector(".drinks-container");
const featuredItemContainer = document.querySelector(
  ".featured-item-container"
);
const bbqMenyBtn = document.querySelector(".bbq-meny-btn");
const burgerMenyBtn = document.querySelector(".burger-meny-btn");
const steakMenyBtn = document.querySelector(".steak-meny-btn");
const dessertMenyBtn = document.querySelector(".dessert-meny-btn");
const drinkMenyBtn = document.querySelector(".drink-meny-btn");
const homeBtn = document.querySelector(".home-btn");
const tabIcon = document.querySelector(".tab-icon");
const tabListContainer = document.querySelector(".tab-list-container");

let bbqs = db.bbqs;
let burgers = db.burgers;
let dessert = db.desserts;
let steaks = db.steaks;
let drinks = db.drinks;

function cardTamplate(meny) {
  // CREATES A TEMPLATE FOR EACH CARD
  const card = document.createElement("article");
  const cardHeader = document.createElement("h3");
  const cardPara = document.createElement("p");
  const cardSubPara = document.createElement("p");
  const cardButton = document.createElement("button");
  const orderContainer = document.createElement("div");

  card.style.backgroundImage = `url('${meny.img}')`;

  cardHeader.textContent = meny.name;
  cardPara.textContent = meny.dsc;
  cardSubPara.textContent = meny.price;
  cardButton.textContent = "ORDER NOW!";

  card.appendChild(cardHeader);
  card.appendChild(cardPara);
  card.appendChild(orderContainer);
  orderContainer.appendChild(cardSubPara);
  orderContainer.appendChild(cardButton);

  card.className = "menu-card";
  cardHeader.className = "menu-card-header";
  cardPara.className = "menu-card-text";
  orderContainer.className = "order-container";
  cardSubPara.className = "menu-card-price";
  cardButton.className = "menu-button";

  return card;
}

function createFeaturedDOMCard(container) {
  //Creates cards for the featured items
  for (let i = 0; i < 1; i++) {
    let bbqsCards = cardTamplate(bbqs[i]);
    let dessertCards = cardTamplate(dessert[i]);
    let burgersCards = cardTamplate(burgers[i]);
    let steaksCards = cardTamplate(steaks[i]);
    let drinksCards = cardTamplate(drinks[i]);

    container.append(drinksCards);
    container.append(steaksCards);
    container.append(burgersCards);
    container.append(dessertCards);
    container.append(bbqsCards);
  }
}

function createBbqsDOMCard(container) {
  //Creates cards for the bbq meny
  for (let i = 0; i < 12; i++) {
    let bbqsCards = cardTamplate(bbqs[i]);

    container.append(bbqsCards);
  }
}

function createDessertDOMCard(container) {
  //Creates cards for the dessert meny
  for (let i = 0; i < 12; i++) {
    let dessertCards = cardTamplate(dessert[i]);

    container.append(dessertCards);
  }
}

function createBurgerDOMCard(container) {
  //Creates cards for the burger meny
  for (let i = 0; i < 12; i++) {
    let burgersCards = cardTamplate(burgers[i]);

    container.append(burgersCards);
  }
}

function createSteaksDOMCard(container) {
  //Creates cards for the steaks meny
  for (let i = 0; i < 12; i++) {
    let steaksCards = cardTamplate(steaks[i]);

    container.append(steaksCards);
  }
}

function createDrinksDOMCard(container) {
  //Creates cards for the drinks meny
  for (let i = 0; i < 12; i++) {
    let drinksCards = cardTamplate(drinks[i]);

    container.append(drinksCards);
  }
}

function hide() {
  //Adds a "display-none" class on all container
  bbqContainer.classList.add("display-none");
  burgerContainer.classList.add("display-none");
  dessertContainer.classList.add("display-none");
  steakContainer.classList.add("display-none");
  drinksContainer.classList.add("display-none");
  featuredItemContainer.classList.add("display-none");
}

tabIcon.addEventListener("click", () => {
  if (tabListContainer.classList.contains("display-none")) {
    // checks if it has the class "display-none"
    tabListContainer.classList.remove("display-none");
  } else {
    tabListContainer.classList.add("display-none");
  }
});

bbqMenyBtn.addEventListener("click", () => {
  hide();
  //removes "display-none" class on container
  bbqContainer.classList.remove("display-none");
});

burgerMenyBtn.addEventListener("click", () => {
  hide();
  //removes "display-none" class on container
  burgerContainer.classList.remove("display-none");
});

dessertMenyBtn.addEventListener("click", () => {
  hide();
  //removes "display-none" class on container
  dessertContainer.classList.remove("display-none");
});

steakMenyBtn.addEventListener("click", () => {
  hide();
  //removes "display-none" class on container
  steakContainer.classList.remove("display-none");
});

drinkMenyBtn.addEventListener("click", () => {
  hide();
  //removes "display-none" class on container
  drinksContainer.classList.remove("display-none");
});

homeBtn.addEventListener("click", () => {
  hide();
  //removes "display-none" class on container
  featuredItemContainer.classList.remove("display-none");
});

function initializeCards() {
  createBbqsDOMCard(bbqContainer);
  createBurgerDOMCard(burgerContainer);
  createDessertDOMCard(dessertContainer);
  createSteaksDOMCard(steakContainer);
  createDrinksDOMCard(drinksContainer);
  createFeaturedDOMCard(featuredItemContainer);
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
function search_product() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("menu-card");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}
