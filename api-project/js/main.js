const URL = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment`
import { DOMSelectors } from "./dom";

async function getData(URL){
  try {
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new error(response.statusText);
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    data.data.forEach((item) => console.log(item))
    data.name.forEach((item) => ItemCard(item));
  } catch (error) {
    document.querySelector("h2").textContent = error
  }
}

function ItemCard(data) {
  DOMSelectors.ItemBox.insertAdjacentHTML("beforeend", `<div id="ItemBox"> <h2> ${data.name} <h2> </div>`)
}

getData(URL);