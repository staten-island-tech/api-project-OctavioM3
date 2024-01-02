import "../css/style.css";
import { DOMSelectors } from "./dom";
const URL = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment`
const response = await fetch(URL);
const data = await response.json();

async function getData(URL){
  try {
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new error(response.statusText);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    document.querySelector("h2").textContent = error
  }
}

getData(URL);

DOMSelectors.EquipmentBtn.addEventListener("click", function (event) {
  event.preventDefault();
  clearall();
  inputName();
});

function clearall() {
  const ItemCard = document.querySelectorAll(".ItemCard");
  ItemCard.forEach((card) => card.remove());
}

function inputName() {
  data.data.forEach((data) => DOMSelectors.ItemBox.insertAdjacentHTML(
  "beforeend",
  `<div class="ItemCard"><h2 id="Name"> ${data.name} </h2><img src="${data.image}" alt="${data.name}" class="Cardimg"></img></div>`));
};
