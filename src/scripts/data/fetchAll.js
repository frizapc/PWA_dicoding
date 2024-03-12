import CONFIG from "../global/config";
import LoaderIndicator from "../utils/loader-indicator";

async function FetchAllData() {
  LoaderIndicator.loading();
  try {
    const data = await fetch(CONFIG.LIST_URL);
    const datajson = await data.json();
    LoaderIndicator.loaded();
    return datajson.restaurants;
  } catch (error) {
    console.log(error);
  }
}

export default FetchAllData;
