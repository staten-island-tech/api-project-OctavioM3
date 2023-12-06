const URL = `https://stats.nba.com/stats/playercareerstats`

async function getData(URL){
  try {
    const response = await fetch(URL);
    console.log(response);
    const data = await response.json();
    console.log(data);
    document.querySelector("h1").textContent = data.content;
  } catch (error) {
    
  }
}
getData(URL);