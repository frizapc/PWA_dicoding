import CONFIG from "../global/config";

async function FetchDetailData(id) {
  const data = await fetch(CONFIG.DETAIL_URL + id);
  const datajson = await data.json();
  return datajson.restaurant;
}

export default FetchDetailData;
