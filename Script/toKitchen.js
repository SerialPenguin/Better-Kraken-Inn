// Hämtar knappen som Majk skapade och döper den variabeln till orderBtn
const orderBtn = document.querySelectorAll(".menu-button");
const foodName = document.querySelectorAll(".menu-card-header");
const foodPrice = document.querySelectorAll(".menu-card-price");
const tabListUl = document.querySelector(".tab-list");
const totaltTabPrice = document.querySelector(".total-tab-price");
const tabAmount = document.querySelector(".tab-amount");
const popUpContainer = document.querySelector(".pop-up-container");
const popUpBtn = document.querySelectorAll(".pop-up-btn");
let tabPriceList = 0;
let tabCounter = 0;

for (let i = 0; i < orderBtn.length; i++) {
  orderBtn[i].addEventListener("click", () => {
    popUpContainer.classList.remove("display-none");
    popUpCard(foodName[i], foodPrice[i]);
    vibrateTab();
    updateTabList(foodName[i], foodPrice[i]);
    tabCounterUpdater();
  });
}

function popUpCard(name, price) {
  const popUp = document.createElement("div");
  let popUpHeader = document.createElement("h3");
  let popUpPara = document.createElement("p");
  let popUpPrice = document.createElement("p");
  let btnConfirm = document.createElement("button");
  let btnDecline = document.createElement("button");
  let btnContainer = document.createElement("div");

  btnContainer.appendChild(btnConfirm);
  btnContainer.appendChild(btnDecline);
  popUp.appendChild(popUpHeader);
  popUp.appendChild(popUpPara);
  popUp.appendChild(popUpPrice);
  popUp.appendChild(btnContainer);

  popUpHeader.innerHTML = "Vill du lägga till order?";
  popUpPara.innerHTML = `${name.textContent}`;
  popUpPrice.innerHTML = `Din nya totala blir ${
    tabPriceList + parseInt(price.textContent)
  }KR`;
  btnConfirm.textContent = "Confirm";
  btnDecline.textContent = "Decline";
  btnConfirm.addEventListener("click", () => {
    popUpContainer.classList.add("display-none");
  });

  popUp.className = "pop-up";
  btnConfirm.className = "pop-up-btn confirm";
  btnDecline.className = "pop-up-btn decline";

  popUpContainer.append(popUp);
}

function tabCounterUpdater() {
  tabCounter++;
  tabAmount.textContent = tabCounter;
  return tabCounter;
}

function vibrateTab() {
  tabIcon.classList.add("vibrate");

  setTimeout(function () {
    tabIcon.classList.remove("vibrate");
  }, 260);
}

function totaltPrice(price) {
  tabPriceList = tabPriceList + parseInt(price.textContent);

  totaltTabPrice.textContent = `Total: ${tabPriceList}kr`;
}

function tabListLi(list) {
  let listItem = document.createElement("li");
  listItem.textContent = `${list[0]}, ${list[1]}kr`;

  listItem.className = "tab-item";

  tabListUl.append(listItem);
}

function updateTabList(name, price) {
  let tabList = [];
  totaltPrice(price);
  tabList.push(name.textContent, price.textContent);
  tabListLi(tabList);
}

function confirmFood() {
  let text = "Order/Beställ = OK ---- Cancel/Beställ inte = Avbryt.";
  if (confirm(text) == true) {
    text = "Maten är påväg / Your food is ordered";
    return true;
  } else {
    text = "Your order is canceled / Beställningen avbruten!";
    return false;
  }
}
