import "../css/style.css";
import { DOMSelectors } from "./dom";
const EquipmentURL = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment`;
const MonsterURL = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters`;
const MaterialURL = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials`;
const response = await fetch(EquipmentURL);
const secresponse = fetch(MonsterURL);
const thirdresponse = fetch(MaterialURL);
const data = response.json();
const mondata = secresponse.json();
const materialdata = thirdresponse.json();

async function getData(EquipmentURL, MonsterURL, MaterialURL) {
  try {
    const response = await fetch(EquipmentURL);
    const secresponse = await fetch(MonsterURL);
    const thirdresponse = await fetch(MaterialURL);
    if (
      (response.status != 200,
      secresponse.status != 200,
      thirdresponse.status != 200)
    ) {
      throw new error(
        response.statusText,
        secresponse.statusText,
        thirdresponse.statusText
      );
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(secresponse);
    const mondata = await secresponse.json();
    console.log(mondata);
    console.log(thirdresponse);
    const materialdata = await thirdresponse.json();
    console.log(materialdata);
  } catch (error) {
    document.querySelector("h2").textContent = error;
  }
}

getData(EquipmentURL, MonsterURL, MaterialURL);

DOMSelectors.EquipmentBtn.addEventListener("click", function (event) {
  event.preventDefault();
  clearall();
  inputName();
});

DOMSelectors.MonsterBtn.addEventListener("click", function (event) {
  event.preventDefault();
  clearall();
  inputMonsters();
});

DOMSelectors.MaterialBtn.addEventListener("click", function (event) {
  event.preventDefault();
  clearall();
  inputMaterials();
});

function clearall() {
  const ItemCard = document.querySelectorAll(".ItemCard");
  ItemCard.forEach((card) => card.remove());
}

function inputName() {
  data.data.forEach((data) =>
    DOMSelectors.ItemBox.insertAdjacentHTML(
      "beforeend",
      `<div class="ItemCard"><h2 id="Name"> ${data.name} </h2><img src="${data.image}" alt="${data.name}" class="Cardimg"></img><p class="description">${data.description}</p></div>`
    )
  );
}

function inputMonsters() {
  mondata.data.forEach((mondata) =>
    DOMSelectors.ItemBox.insertAdjacentHTML(
      "beforeend",
      `<div class="ItemCard"><h2 id="Name"> ${mondata.name} </h2><img src="${mondata.image}" alt="${mondata.name}" class="Cardimg"></img><p class="description">${mondata.description}</P> <p class="drops">Drops: ${mondata.drops}</p></div>`
    )
  );
}

function inputMaterials() {
  materialdata.data.forEach((materialdata) =>
    DOMSelectors.ItemBox.insertAdjacentHTML(
      "beforeend",
      `<div class="ItemCard"><h2 id="Name"> ${materialdata.name} </h2><img src="${materialdata.image}" alt="${materialdata.name}" class="Cardimg"></img><p class="description">${materialdata.description}</p> <p class="location">${materialdata.common_locations}</p></div>`
    )
  );
}
/*
  function ButtonChange (data, mondata, materialdata) {
let buttons = document.querySelectorAll(".btn")

  }*/
