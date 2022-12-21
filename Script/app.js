const mainContent = document.querySelector(".main-content");
const bbqContainer = document.querySelector(".bbq-container");
const burgerContainer = document.querySelector(".burger-container");
const dessertContainer = document.querySelector(".dessert-container");
const steakContainer = document.querySelector(".steak-container");
const drinksContainer = document.querySelector(".drinks-container");
const featuredItemContainer = document.querySelector(
  ".featured-item-container"
);
const menuBtn = document.querySelectorAll(".menu-btn");
const tabIcon = document.querySelector(".tab-icon");
const tabListContainer = document.querySelector(".tab-list-container");

let bbqs = db.bbqs;
let burgers = db.burgers;
let dessert = db.desserts;
let steaks = db.steaks;
let drinks = db.drinks;

function cardTamplate(menu) {
  // CREATES A TEMPLATE FOR EACH CARD
  const card = document.createElement("article");
  const cardHeader = document.createElement("h3");
  const cardPara = document.createElement("p");
  const cardSubPara = document.createElement("p");
  const cardButton = document.createElement("button");
  const orderContainer = document.createElement("div");

  card.style.backgroundImage = `url('${menu.img}')`;

  cardHeader.textContent = menu.name;
  cardPara.textContent = menu.dsc;
  cardSubPara.textContent = menu.price;
  cardButton.textContent = "BESTÄLL NU!";

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

function createMenuDOMCard(
  drinksContainer,
  steakContainer,
  burgerContiner,
  dessertContainer,
  bbqContainer
) {
  //Creates cards for all items in the menu
  for (let i = 0; i < 12; i++) {
    let bbqsCards = cardTamplate(bbqs[i]);
    let dessertCards = cardTamplate(dessert[i]);
    let burgersCards = cardTamplate(burgers[i]);
    let steaksCards = cardTamplate(steaks[i]);
    let drinksCards = cardTamplate(drinks[i]);

    drinksContainer.append(drinksCards);
    steakContainer.append(steaksCards);
    burgerContiner.append(burgersCards);
    dessertContainer.append(dessertCards);
    bbqContainer.append(bbqsCards);
  }
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

function hide() {
  //Adds a "display-none" class on all container
  bbqContainer.classList.add("display-none");
  burgerContainer.classList.add("display-none");
  dessertContainer.classList.add("display-none");
  steakContainer.classList.add("display-none");
  drinksContainer.classList.add("display-none");
  featuredItemContainer.classList.add("display-none");
}

function show() {
  //Remove class "display-none" on all container
  featuredItemContainer.classList.remove("display-none");
  burgerContainer.classList.remove("display-none");
  drinksContainer.classList.remove("display-none");
  steakContainer.classList.remove("display-none");
  dessertContainer.classList.remove("display-none");
  bbqContainer.classList.remove("display-none");
}

function handleNavClickFunction(i) {
  //uses function hide() then removes the class "display-none" from the tab you pressed on
  hide();
  if (menuBtn[i].classList.contains("home")) {
    show();
  } else if (menuBtn[i].classList.contains("bbq")) {
    bbqContainer.classList.remove("display-none");
  } else if (menuBtn[i].classList.contains("drink")) {
    drinksContainer.classList.remove("display-none");
  } else if (menuBtn[i].classList.contains("burger")) {
    burgerContainer.classList.remove("display-none");
  } else if (menuBtn[i].classList.contains("steak")) {
    steakContainer.classList.remove("display-none");
  } else if (menuBtn[i].classList.contains("dessert")) {
    dessertContainer.classList.remove("display-none");
  }
}

tabIcon.addEventListener("click", () => {
  if (tabListContainer.classList.contains("display-none")) {
    // checks if it has the class "display-none"
    tabListContainer.classList.remove("display-none");
  } else {
    tabListContainer.classList.add("display-none");
  }
});

for (let i = 0; i < menuBtn.length; i++) {
  //loops through menyBtn and adds a "click" function
  menuBtn[i].addEventListener("click", () => {
    handleNavClickFunction(i);
  });
}

function initializeCards() {
  createMenuDOMCard(
    drinksContainer,
    steakContainer,
    burgerContainer,
    dessertContainer,
    bbqContainer
  );
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
