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
  } catch (error) {
    document.querySelector("h2").textContent = error
  }
}

getData(URL);

const putEqupimentInHTML = async () => {
  const equipment = await getData(URL);
  DOMSelectors.ItemName = `Equipment: ${equipment.data.name}`;
};
putEqupimentInHTML();
