import CONFIG from "../global/config";

async function FetchAllData() {
  const data = await fetch(CONFIG.LIST_URL);
  const datajson = await data.json();
  return datajson.restaurants;
}

export default FetchAllData;
