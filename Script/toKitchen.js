// Hämtar knappen som Majk skapade och döper den variabeln till orderBtn
const orderBtn = document.querySelectorAll(".menu-button");
const foodName = document.querySelectorAll(".menu-card-header");
const foodPrice = document.querySelectorAll(".menu-card-price");
const tabListUl = document.querySelector(".tab-list");
const totaltTabPrice = document.querySelector(".total-tab-price");
const tabAmount = document.querySelector(".tab-amount");
const popUpContainer = document.querySelector(".pop-up-container");
const btnContainer = document.querySelector(".btn-container");
const popUpBtn = document.querySelectorAll(".pop-up-btn");
let tabPriceList = 0;
let tabCounter = 0;
let tabList = [];
for (let i = 0; i < orderBtn.length; i++) {
  orderBtn[i].addEventListener("click", () => {
    popUpCard(foodName[i], foodPrice[i]);
    tabInfo(foodName[i], foodPrice[i]);
  });
}

function popUpCard(name, price) {
  popUpContainer.classList.remove("display-none");
  const popUp = document.createElement("div");
  let popUpHeader = document.createElement("h3");
  let popUpPara = document.createElement("p");
  let popUpPrice = document.createElement("p");

  popUp.appendChild(popUpHeader);
  popUp.appendChild(popUpPara);
  popUp.appendChild(popUpPrice);
  popUp.appendChild(btnContainer);

  popUpHeader.innerHTML = "Vill du lägga till order?";
  popUpPara.innerHTML = `${name.textContent}`;
  popUpPrice.innerHTML = `Din nya totala blir ${
    tabPriceList + parseInt(price.textContent)
  }KR`;

  popUp.className = "pop-up";
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
  tabPriceList = tabPriceList + parseInt(price[1]);

  totaltTabPrice.textContent = `Total: ${tabPriceList}kr`;
}

function tabListLi(list) {
  let listItem = document.createElement("li");
  listItem.textContent = `${list[0]}, ${list[1]}kr`;

  listItem.className = "tab-item";

  tabListUl.append(listItem);
}

function tabInfo(name, price) {
  tabList = [];
  tabList.push(name.textContent, price.textContent);
}

function updateTabList() {
  totaltPrice(tabList);
  tabListLi(tabList);
}

function handlePopUpClickFunction(i) {
  if (popUpBtn[i].classList.contains("confirm")) {
    confirmFood(true);
  } else {
  }
}

for (let i = 0; i < popUpBtn.length; i++) {
  //loops through menyBtn and adds a "click" function
  popUpBtn[i].addEventListener("click", () => {
    popUpContainer.classList.add("display-none");
    handlePopUpClickFunction(i);
  });
}

function confirmFood(checker) {
  if (checker) {
    vibrateTab();
    updateTabList();
    tabCounterUpdater();
    if (tabPriceList > 1000) {
      //Vänligen betala först
      console.log("hej");
      return true;
    } else {
      return true;
    }
    console.log(tabPriceList);
    return true;
  } else {
    return false;
  }
}
