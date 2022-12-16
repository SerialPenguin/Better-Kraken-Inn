const mainContent = document.querySelector(".main-content");

let bbqs = db.bbqs;
let burgers = db.burgers;

function createCard(meny) {
  // CREATES A TEMPLATE FOR EACH CARD
  const card = document.createElement("article");
  const cardHeader = document.createElement("h3");
  const cardPara = document.createElement("p");
  const orderContainer = document.createElement('div');
  const cardSubPara = document.createElement("p");
  const cardButton = document.createElement('button');
  
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

/* test code */
function createDOMCard(container) {
  // let test = bbqs.length;
  for (let i = 0; i < 5; i++) {
    let bbqsCards = createCard(bbqs[i]);
    let burgersCards = createCard(burgers[i]);

    container.append(bbqsCards);
    container.append(burgersCards);
  }
}

createDOMCard(mainContent);


var flags = document.getElementsByClassName('flag_link');


Array.prototype.forEach.call(flags, function(e){
  e.addEventListener('click', function(){
    let lang = e.getAttribute('data-lang'); 
    console.log(lang);
    let languageSelect = document.querySelector("select.goog-te-combo");
    console.log(languageSelect);
    languageSelect.value = lang; 
    languageSelect.dispatchEvent(new Event("change"));
  }); 
});

