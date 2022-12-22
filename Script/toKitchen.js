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
const btnDecline = document.querySelector(".decline");
const payBtn = document.querySelector(".order-btn");

let tabPriceList = 0;
let tabCounter = 0;
let tabList = [];

for (let i = 0; i < orderBtn.length; i++) {
  orderBtn[i].addEventListener("click", () => {
    popUpCard(foodName[i], foodPrice[i]);
    tabInfo(foodName[i], foodPrice[i]);
    if (tabRoof()) {
      tabRoof();
    }
  });
}

function clearTabList() {
  let clearTab = document.querySelectorAll(".tab-item");
  tabPriceList = 0;
  tabAmount.textContent = "";
  totaltTabPrice.textContent = "";
  tabCounter = 0;
  btnDecline.textContent = "Decline";

  for (let clearTabs of clearTab) {
    clearTabs.remove();
  }
}

payBtn.addEventListener("click", () => {
  clearTabList();
});

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

  if (tabRoof()) {
    popUpHeader.innerHTML = "Vill du lägga till order?";
    popUpPara.innerHTML = `${name.textContent}`;
    popUpPrice.innerHTML = `Din nota är över 1000Kr och din nya totala blir ${
      tabPriceList + parseInt(price.textContent)
    }Kr vill du fortsätta?`;
  } else {
    popUpHeader.innerHTML = "Vill du lägga till order?";
    popUpPara.innerHTML = `${name.textContent}`;
    popUpPrice.innerHTML = `Din nya totala blir ${
      tabPriceList + parseInt(price.textContent)
    }Kr`;
  }

  popUp.className = "pop-up";
  popUpContainer.append(popUp);
}

function tabRoof() {
  if (tabPriceList > 150) {
    btnDecline.textContent = "Pay now";
    return true;
  } else {
    return false;
  }
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
  console.log(`${list[0]}, ${list[1]}kr`);

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
  } else if (tabRoof() && popUpBtn[i].classList.contains("decline")) {
    tabListContainer.classList.remove("display-none");
  } else {
    return false;
  }
}

for (let i = 0; i < popUpBtn.length; i++) {
  //loops through popUpBtn and adds a "click" function
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
  } else {
    return false;
  }
}
