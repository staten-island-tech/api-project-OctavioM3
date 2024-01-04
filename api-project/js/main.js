import "../css/style.css";
import { DOMSelectors } from "./dom";
const EquipmentURL = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment`
const MonsterURL = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters`
const response = await fetch(EquipmentURL);
const secresponse = await fetch(MonsterURL);
const data = await response.json();
const mondata = await secresponse.json()

async function getData(EquipmentURL, MonsterURL){
  try {
    const response = await fetch(EquipmentURL);
    const secresponse = await fetch(MonsterURL);
    if (response.status != 200, secresponse.status != 200) {
      throw new error(response.statusText, secresponse.statusText);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(secresponse);
    const mondata = await secresponse.json();
    console.log(mondata)
  } catch (error) {
    document.querySelector("h2").textContent = error
  }
}

getData(EquipmentURL, MonsterURL);

DOMSelectors.EquipmentBtn.addEventListener("click", function (event) {
  event.preventDefault();
  clearall();
  inputName();
});

DOMSelectors.MonsterBtn.addEventListener("click", function (event) {
  event.preventDefault();
  clearall();
  inputMonsters();
})

function clearall() {
  const ItemCard = document.querySelectorAll(".ItemCard");
  ItemCard.forEach((card) => card.remove());
}

function inputName() {
  data.data.forEach((data) => DOMSelectors.ItemBox.insertAdjacentHTML(
  "beforeend",
  `<div class="ItemCard"><h2 id="Name"> ${data.name} </h2><img src="${data.image}" alt="${data.name}" class="Cardimg"></img><p>${data.description}</p></div>`));
};

function inputMonsters() {
  mondata.data.forEach((mondata) => DOMSelectors.ItemBox.insertAdjacentHTML(
    "beforeend",
    `<div class="ItemCard"><h2 id="Name"> ${mondata.name} </h2><img src="${mondata.image}" alt="${mondata.name}" class="Cardimg"></img><p>${mondata.description}</p></div>`
  ));
};