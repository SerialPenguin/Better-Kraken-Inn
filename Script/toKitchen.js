// Hämtar knappen som Majk skapade och döper den variabeln till orderBtn
const orderBtn = document.querySelectorAll(".menu-button");
const foodName = document.querySelectorAll(".menu-card-header");
const foodPrice = document.querySelectorAll(".menu-card-price");
const tabListUl = document.querySelector(".tab-list");
const totaltTabPrice = document.querySelector(".total-tab-price");
const tabCounter = document.querySelector(".tab-counter");
let tabPriceList = 0;

/* Det finns index från 0 till 59 alltså 60 knappar totalt som heter "ORDER NOW". 
 [0]= "ORDER NOW" på bilden höst upp, [1] på bilden näst högst upp.
 */

// Nu vill vi loopa igenom alla dessa [0] - [59] knappar för att sätta en addEventListner på samtliga "ORDER NOW"
for (let i = 0; i < orderBtn.length; i++) {
  orderBtn[i].addEventListener("click", () => {
    vibrateTab();
    updateTab(foodName[i], foodPrice[i]);
    //    console.log("Vara skickad till köket") // Consol.log för att se så att knappen är aktiv

    amountInTablist(); // anropar funktionen nedan samt loopar igen alla index i vår db array ( listan med alla rätter )
  });
}

function amountInTablist() {
  tabCounter.textContent++;
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

  tabListUl.append(listItem);
}

function updateTab(name, price) {
  let tabList = [];
  totaltPrice(price);
  tabList.push(name.textContent, price.textContent);
  tabListLi(tabList);
  console.log(tabList);
  console.log(tabPriceList);
  console.log(name.textContent, price.textContent);
}

/* local Storage förklarat : 
What is localStorage in JavaScript? localStorage is a property that allows JavaScript sites and apps to 
save key-value pairs in a web browser with no expiration date. 
This means the data stored in the browser will persist even after the browser window is closed.
*/

// Funktion för att spara alla "ORDER NOW" till local Storage
// function toKitchenTotal() {
//   let addedFromMeny = localStorage.getItem("toKitchenTotal"); // ingen bra förklaring på denna.

//   //console.log(typeof addedFromMeny) // Visar att det är ett OBJECT
//   //localStorage.setItem("toKitchenTotal", 1)

//   addedFromMeny = parseInt(addedFromMeny); // Gör om från OBJCET till INT
//   //console.log(typeof addedFromMeny) // Consolen visar nu att det är en INT istället för OBJECT

//   // if statement som lagra värdet ( antal tryckta ORDER NOW ). Antigen lagrar för första gången( första trycket) ELLER gör +1 om de redan är tryckt en gång och man trycker en andra gång +1

//   if (addedFromMeny) {
//     localStorage.setItem("toKitchenTotal", addedFromMeny + 1); // eftersom de redan finns en lagrad, så läggs det på ett nummer + 1
//     tabCounter.textContent = addedFromMeny + 1; // Antalet plussas på uppe i header på vår sida ( ska göras om på bättre sätt )
//   } else {
//     localStorage.setItem("toKitchenTotal", 1); // första gången koden körs aktiveras denna
//     tabCounter.textContent = 1; // siffran i header kan uppdateras med antal om vi önskar ( dvs om man trycker på ORDER NOW någon mer stans)

//     // Vore fint att ha som på denna bild :: https://stackoverflow.com/questions/51304169/how-to-put-the-number-at-top-right-corner-of-cart-icon
//   }
// }
