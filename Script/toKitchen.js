// Hämtar knappen som Majk skapade och döper den variabeln till orderBtn
const orderBtn = document.querySelectorAll(".menu-button");
const foodName = document.querySelectorAll(".menu-card-header");
const foodPrice = document.querySelectorAll(".menu-card-price");
const tabListUl = document.querySelector(".tab-list");
const totaltTabPrice = document.querySelector(".total-tab-price");
const tabAmount = document.querySelector(".tab-amount");
let tabPriceList = 0;
let tabCounter = 0;

for (let i = 0; i < orderBtn.length; i++) {
  orderBtn[i].addEventListener("click", () => {
    vibrateTab();
    updateTabList(foodName[i], foodPrice[i]);
    tabCounterUpdater();
  });
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
  }, 1000);
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
