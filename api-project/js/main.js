const URL = `https://stats.nba.com/stats/playerprofile`

async function getData(URL){
    const response = await fetch(URL);
    console.log(response);
}
getData(URL)