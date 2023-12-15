<<<<<<< HEAD
const URL = `https://stats.nba.com/stats/playerprofile`

async function getData(URL){
    const response = await fetch(URL);
    console.log(response);
}
getData(URL)
=======
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
  } catch (error) {
    document.querySelector("h2").textContent = error
  }
}

getData(URL);

function ItemCard() {
  DOMSelectors.ItemBox.insertAdjacentHTML("beforeend", `<div id="ItemBox"> <h2> ${data.name} <h2> </div>`)
}

const CreateItem = async () => {
  const equipment = await getData(URL);
  DOMSelectors.ItemName.innerHTML = `Equipment: ${equipment.data.name}`;
};
CreateItem();
>>>>>>> 608f9d0a45b815b29fc6859094499322bb07247d
