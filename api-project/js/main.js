import "../css/style.css";
import { DOMSelectors } from "./dom";
const EquipmentURL = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment`;
const MonsterURL = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters`;
const MaterialURL = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials`;
const AllURL = `https://botw-compendium.herokuapp.com/api/v3/compendium/all`;

async function getData() {
  try {
    const response = await fetch(EquipmentURL);
    const secresponse = await fetch(MonsterURL);
    const thirdresponse = await fetch(MaterialURL);
    const fourthresponse = await fetch(AllURL);
    if (
      (response.status != 200,
      secresponse.status != 200,
      thirdresponse.status != 200,
      fourthresponse.status != 200)
    ) {
      throw new error(
        response.statusText,
        secresponse.statusText,
        thirdresponse.statusText,
        fourthresponse.statusText
      );
    }
    /*
    const equipdata = await response.json();
    console.log(equipdata);
    const mondata = await secresponse.json();
    console.log(mondata);
    const materialdata = await thirdresponse.json();
    console.log(materialdata);
    */
    const data = await fourthresponse.json();
    data.data.forEach((data) =>
      DOMSelectors.ItemBox.insertAdjacentHTML(
        "beforeend",
        `<div class="ItemCard"><h2 id="Name"> ${data.name} </h2><img src="${data.image}" alt="a picture of ${data.name}" class="Cardimg"></img><p class="description">${data.description}</p></div>`
      )
    );
  } catch (error) {
    document.querySelector("h1").textContent = error;
  }
}

getData();

DOMSelectors.AllBtn.addEventListener("click", function (event) {
  event.preventDefault();
  clearall();
  inputAll();
});

DOMSelectors.EquipmentBtn.addEventListener("click", function (event) {
  event.preventDefault();
  clearall();
  inputEquipment();
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

async function inputEquipment() {
  const equipmentdata = await fetch(EquipmentURL);
  const equipment = await equipmentdata.json();
  equipment.data.forEach((data) =>
    DOMSelectors.ItemBox.insertAdjacentHTML(
      "beforeend",
      `<div class="ItemCard"><h2 id="Name"> ${data.name} </h2><img src="${data.image}" alt="a picture of ${data.name}" class="Cardimg"></img><p class="description">${data.description}</p></div>`
    )
  );
}

async function inputMonsters() {
  const monsterdata = await fetch(MonsterURL);
  const monster = await monsterdata.json();
  monster.data.forEach((mondata) =>
    DOMSelectors.ItemBox.insertAdjacentHTML(
      "beforeend",
      `<div class="ItemCard"><h2 id="Name"> ${mondata.name} </h2><img src="${mondata.image}" alt="a picture of ${mondata.name}" class="Cardimg"></img><p class="description">${mondata.description}</P> <p class="drops">Drops: ${mondata.drops}</p></div>`
    )
  );
}

async function inputMaterials() {
  const materialdata = await fetch(MaterialURL);
  const material = await materialdata.json();
  material.data.forEach((materialdata) =>
    DOMSelectors.ItemBox.insertAdjacentHTML(
      "beforeend",
      `<div class="ItemCard"><h2 id="Name"> ${materialdata.name} </h2><img src="${materialdata.image}" alt="a picture of ${materialdata.name}" class="Cardimg"></img><p class="description">${materialdata.description}</p> <p class="location">${materialdata.common_locations}</p></div>`
    )
  );
}

async function inputAll() {
  const dataresponse = await fetch(AllURL);
  const data = await dataresponse.json();
  data.data.forEach((data) =>
    DOMSelectors.ItemBox.insertAdjacentHTML(
      "beforeend",
      `<div class="ItemCard"><h2 id="Name"> ${data.name} </h2><img src="${data.image}" alt="a picture of ${data.name}" class="Cardimg"></img><p class="description">${data.description}</p></div>`
    )
  );
}
/*
  function ButtonChange (data, mondata, materialdata) {
let buttons = document.querySelectorAll(".btn")

  }*/
