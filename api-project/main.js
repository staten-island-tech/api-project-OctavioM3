const URL = `https://stats.nba.com/playercareerstats`

async function getData(URL){
  try {
    const response = await fetch(URL);
    console.log(response);
    const data = await response.json();
    console.log(data)
  } catch (error) {

  }
}
getData(URL)