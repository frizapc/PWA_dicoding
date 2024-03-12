import CONFIG from "../global/config";

async function FetchImageData(id) {
  const response = await fetch(CONFIG.IMAGE_URL + id);
  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

export default FetchImageData;
